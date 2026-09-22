(function() {
  'use strict';
  const CATEGORIES = {
    product_release: { label: '产品发布', color: '#FF6B35' },
    research_paper: { label: '研究论文', color: '#06A77D' },
    funding: { label: '融资商业', color: '#F7B801' },
    opensource: { label: '开源项目', color: '#00B4D8' },
    regulation: { label: '监管政策', color: '#6C757D' },
    community_hot: { label: '社区热点', color: '#EF476F' }
  };
  const state = {
    currentDate: null, data: null,
    filters: { category: 'all', search: '', heat: 0, tag: null },
    theme: localStorage.getItem('ai-news-theme') || 'light'
  };
  const el = {
    themeToggle: document.getElementById('themeToggle'),
    tickerDate: document.getElementById('tickerDate'),
    dateSelector: document.getElementById('dateSelector'),
    statsBar: document.getElementById('statsBar'),
    categoryFilters: document.getElementById('categoryFilters'),
    heatFilter: document.getElementById('heatFilter'),
    searchInput: document.getElementById('searchInput'),
    newsList: document.getElementById('newsList'),
    emptyState: document.getElementById('emptyState'),
    clearFilters: document.getElementById('clearFilters'),
    itemCount: document.getElementById('itemCount'),
    columnTitle: document.getElementById('columnTitle'),
    categoryStats: document.getElementById('categoryStats'),
    tagCloud: document.getElementById('tagCloud'),
    archiveList: document.getElementById('archiveList')
  };
  function initTheme() { document.documentElement.setAttribute('data-theme', state.theme); el.themeToggle.addEventListener('click', toggleTheme); }
  function toggleTheme() { state.theme = state.theme === 'light' ? 'dark' : 'light'; document.documentElement.setAttribute('data-theme', state.theme); localStorage.setItem('ai-news-theme', state.theme); }
  function loadDateData(dateStr) {
    return new Promise((resolve, reject) => {
      if (window.NEWS_DATA && window.NEWS_DATA[dateStr]) { resolve(window.NEWS_DATA[dateStr]); return; }
      const script = document.createElement('script');
      script.src = 'data/' + dateStr + '.js';
      script.onload = function() { if (window.NEWS_DATA && window.NEWS_DATA[dateStr]) { resolve(window.NEWS_DATA[dateStr]); } else { reject(new Error('Data not found for ' + dateStr)); } };
      script.onerror = function() { reject(new Error('Failed to load data for ' + dateStr)); };
      document.head.appendChild(script);
    });
  }
  async function switchDate(dateStr) {
    state.currentDate = dateStr;
    state.filters.category = 'all'; state.filters.search = ''; state.filters.heat = 0; state.filters.tag = null;
    el.searchInput.value = ''; el.heatFilter.value = '0';
    try {
      state.data = await loadDateData(dateStr);
      el.tickerDate.textContent = dateStr;
      el.columnTitle.textContent = dateStr + ' 动态';
      renderDateSelector(); renderCategoryFilters(); renderStatsBar(); renderCategoryStats(); renderTagCloud(); renderArchiveList(); renderNews();
    } catch (err) { console.error('Failed to load date data:', err); el.newsList.innerHTML = '<div class="empty-state"><p>数据加载失败：' + err.message + '</p></div>'; }
  }
  function renderDateSelector() {
    if (!window.NEWS_MANIFEST || !window.NEWS_MANIFEST.dates) return;
    const dates = window.NEWS_MANIFEST.dates; el.dateSelector.innerHTML = '';
    dates.forEach(function(date) {
      const btn = document.createElement('button');
      btn.className = 'date-btn' + (date === state.currentDate ? ' active' : '');
      btn.textContent = date;
      btn.addEventListener('click', function() { if (date !== state.currentDate) { switchDate(date); } });
      el.dateSelector.appendChild(btn);
    });
  }
  function renderStatsBar() {
    if (!state.data) return; const d = state.data;
    el.statsBar.innerHTML = '<span class="stat-item">共 <span class="stat-value">' + d.total_count + '</span> 条</span>' + '<span class="stat-item">5星 <span class="stat-value">' + countByHeat(5) + '</span></span>' + '<span class="stat-item">分类 <span class="stat-value">' + Object.keys(d.categories || {}).length + '</span></span>';
  }
  function countByHeat(heat) { if (!state.data || !state.data.items) return 0; return state.data.items.filter(function(item) { return item.heat === heat; }).length; }
  function renderCategoryFilters() {
    el.categoryFilters.innerHTML = '';
    const allBtn = createChip('全部', null, state.filters.category === 'all'); el.categoryFilters.appendChild(allBtn);
    Object.keys(CATEGORIES).forEach(function(key) {
      const cat = CATEGORIES[key]; const count = state.data && state.data.categories ? (state.data.categories[key] || 0) : 0;
      if (count > 0) { const chip = createChip(cat.label, cat.color, state.filters.category === key); chip.dataset.category = key; el.categoryFilters.appendChild(chip); }
    });
  }
  function createChip(label, color, active) {
    const chip = document.createElement('button'); chip.className = 'cat-chip' + (active ? ' active' : '');
    if (color) { chip.style.backgroundColor = active ? color : ''; chip.style.borderColor = active ? 'transparent' : ''; } else if (active) { chip.style.backgroundColor = 'var(--text-primary)'; chip.style.color = 'var(--bg-primary)'; }
    if (color) { const dot = document.createElement('span'); dot.className = 'cat-dot'; dot.style.backgroundColor = color; chip.appendChild(dot); }
    const text = document.createElement('span'); text.textContent = label; chip.appendChild(text);
    chip.addEventListener('click', function() { const cat = chip.dataset.category || 'all'; state.filters.category = cat; renderCategoryFilters(); renderNews(); });
    return chip;
  }
  function renderNews() {
    if (!state.data || !state.data.items) { el.newsList.innerHTML = ''; return; }
    let items = state.data.items.slice();
    if (state.filters.category !== 'all') { items = items.filter(function(item) { return item.category === state.filters.category; }); }
    if (state.filters.heat > 0) { items = items.filter(function(item) { return item.heat >= state.filters.heat; }); }
    if (state.filters.tag) { items = items.filter(function(item) { return item.tags && item.tags.some(function(t) { return t.toLowerCase() === state.filters.tag.toLowerCase(); }); }); }
    if (state.filters.search) { const q = state.filters.search.toLowerCase(); items = items.filter(function(item) { return (item.title && item.title.toLowerCase().indexOf(q) !== -1) || (item.summary && item.summary.toLowerCase().indexOf(q) !== -1) || (item.source && item.source.toLowerCase().indexOf(q) !== -1) || (item.tags && item.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1; })); }); }
    el.itemCount.textContent = items.length + ' 条';
    if (items.length === 0) { el.newsList.innerHTML = ''; el.emptyState.style.display = 'block'; return; }
    el.emptyState.style.display = 'none'; el.newsList.innerHTML = '';
    items.forEach(function(item) { el.newsList.appendChild(createNewsCard(item)); });
  }
  function createNewsCard(item) {
    const card = document.createElement('article'); card.className = 'news-card heat-' + (item.heat || 1);
    if (item.detail) { const ei = document.createElement('div'); ei.className = 'card-expand-indicator'; ei.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>'; card.appendChild(ei); }
    const header = document.createElement('div'); header.className = 'card-header';
    if (item.category && CATEGORIES[item.category]) { const cb = document.createElement('span'); cb.className = 'card-category'; cb.style.backgroundColor = CATEGORIES[item.category].color; cb.textContent = CATEGORIES[item.category].label; header.appendChild(cb); }
    const heatDiv = document.createElement('span'); heatDiv.className = 'card-heat';
    for (var i = 1; i <= 5; i++) { var star = document.createElement('span'); star.className = 'heat-star' + (i <= (item.heat || 0) ? ' filled' : ''); star.textContent = '\u2605'; heatDiv.appendChild(star); }
    header.appendChild(heatDiv);
    if (item.source) { const source = document.createElement('span'); source.className = 'card-source'; source.textContent = item.source; header.appendChild(source); }
    card.appendChild(header);
    const title = document.createElement('h3'); title.className = 'card-title';
    if (item.url) { const link = document.createElement('a'); link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = item.title || '无标题'; link.addEventListener('click', function(e) { e.stopPropagation(); }); title.appendChild(link); } else { title.textContent = item.title || '无标题'; }
    card.appendChild(title);
    if (item.summary) { const summary = document.createElement('p'); summary.className = 'card-summary'; summary.textContent = item.summary; card.appendChild(summary); }
    if (item.detail) {
      const dw = document.createElement('div'); dw.className = 'card-detail';
      const di = document.createElement('div'); di.className = 'card-detail-inner';
      const dl = document.createElement('span'); dl.className = 'detail-label'; dl.textContent = '详细'; di.appendChild(dl);
      const paragraphs = item.detail.split(/\n\s*\n/);
      paragraphs.forEach(function(p) { const pEl = document.createElement('p'); pEl.textContent = p.trim(); di.appendChild(pEl); });
      dw.appendChild(di); card.appendChild(dw);
    }
    const footer = document.createElement('div'); footer.className = 'card-footer';
    if (item.tags && item.tags.length > 0) { const td = document.createElement('div'); td.className = 'card-tags'; item.tags.forEach(function(tag) { const te = document.createElement('span'); te.className = 'tag'; te.textContent = tag; te.addEventListener('click', function(e) { e.stopPropagation(); state.filters.tag = state.filters.tag === tag ? null : tag; renderNews(); }); td.appendChild(te); }); footer.appendChild(td); }
    const meta = document.createElement('div'); meta.className = 'card-meta';
    if (item.date) { const ds = document.createElement('span'); ds.textContent = item.date; meta.appendChild(ds); }
    if (item.url) { const rl = document.createElement('a'); rl.className = 'read-link'; rl.href = item.url; rl.target = '_blank'; rl.rel = 'noopener noreferrer'; rl.textContent = '阅读原文 \u2192'; rl.addEventListener('click', function(e) { e.stopPropagation(); }); meta.appendChild(rl); }
    footer.appendChild(meta); card.appendChild(footer);
    if (item.detail) { card.addEventListener('click', function() { const isExpanded = card.classList.contains('expanded'); document.querySelectorAll('.news-card.expanded').forEach(function(c) { if (c !== card) c.classList.remove('expanded'); }); card.classList.toggle('expanded', !isExpanded); }); }
    return card;
  }
  function initClickOutsideHandler() { document.addEventListener('click', function(e) { if (!e.target.closest('.news-card')) { document.querySelectorAll('.news-card.expanded').forEach(function(card) { card.classList.remove('expanded'); }); } }); }
  function renderCategoryStats() {
    if (!state.data || !state.data.categories) { el.categoryStats.innerHTML = '<p style="font-size:13px;color:var(--text-tertiary)">暂无数据</p>'; return; }
    el.categoryStats.innerHTML = '';
    Object.keys(CATEGORIES).forEach(function(key) { const count = state.data.categories[key] || 0; if (count > 0) { const row = document.createElement('div'); row.className = 'cat-stat-row'; const left = document.createElement('div'); left.className = 'cat-stat-left'; const dot = document.createElement('span'); dot.className = 'cat-stat-dot'; dot.style.backgroundColor = CATEGORIES[key].color; const label = document.createElement('span'); label.textContent = CATEGORIES[key].label; left.appendChild(dot); left.appendChild(label); left.addEventListener('click', function() { state.filters.category = key; renderCategoryFilters(); renderNews(); }); const countEl = document.createElement('span'); countEl.className = 'cat-stat-count'; countEl.textContent = count; row.appendChild(left); row.appendChild(countEl); el.categoryStats.appendChild(row); } });
  }
  function renderTagCloud() {
    if (!state.data || !state.data.items) { el.tagCloud.innerHTML = ''; return; }
    const tagCounts = {}; state.data.items.forEach(function(item) { if (item.tags) { item.tags.forEach(function(tag) { tagCounts[tag] = (tagCounts[tag] || 0) + 1; }); } });
    const sorted = Object.keys(tagCounts).sort(function(a, b) { return tagCounts[b] - tagCounts[a]; }).slice(0, 15);
    el.tagCloud.innerHTML = ''; sorted.forEach(function(tag) { const te = document.createElement('span'); te.className = 'tag'; te.textContent = tag + ' (' + tagCounts[tag] + ')'; if (state.filters.tag === tag) { te.style.color = 'var(--accent)'; te.style.borderColor = 'var(--accent)'; te.style.background = 'var(--accent-soft)'; } te.addEventListener('click', function() { state.filters.tag = state.filters.tag === tag ? null : tag; renderTagCloud(); renderNews(); }); el.tagCloud.appendChild(te); });
  }
  function renderArchiveList() {
    if (!window.NEWS_MANIFEST || !window.NEWS_MANIFEST.dates) return;
    const dates = window.NEWS_MANIFEST.dates; el.archiveList.innerHTML = '';
    dates.forEach(function(date) { const item = document.createElement('div'); item.className = 'archive-item' + (date === state.currentDate ? ' active' : ''); const ds = document.createElement('span'); ds.className = 'archive-date'; ds.textContent = date; let count = '--'; if (window.NEWS_DATA && window.NEWS_DATA[date]) { count = window.NEWS_DATA[date].total_count; } const cs = document.createElement('span'); cs.className = 'archive-count'; cs.textContent = count + ' 条'; item.appendChild(ds); item.appendChild(cs); item.addEventListener('click', function() { if (date !== state.currentDate) { switchDate(date); } }); el.archiveList.appendChild(item); });
  }
  function initEvents() {
    el.searchInput.addEventListener('input', function(e) { state.filters.search = e.target.value.trim(); renderNews(); });
    el.heatFilter.addEventListener('change', function(e) { state.filters.heat = parseInt(e.target.value, 10); renderNews(); });
    el.clearFilters.addEventListener('click', function() { state.filters.category = 'all'; state.filters.search = ''; state.filters.heat = 0; state.filters.tag = null; el.searchInput.value = ''; el.heatFilter.value = '0'; renderCategoryFilters(); renderTagCloud(); renderNews(); });
  }
  function init() {
    initTheme(); initEvents(); initClickOutsideHandler();
    if (window.NEWS_MANIFEST && window.NEWS_MANIFEST.dates && window.NEWS_MANIFEST.dates.length > 0) { const latest = window.NEWS_MANIFEST.latest || window.NEWS_MANIFEST.dates[window.NEWS_MANIFEST.dates.length - 1]; switchDate(latest); } else { el.newsList.innerHTML = '<div class="empty-state"><p>暂无新闻数据</p><p style="font-size:13px;margin-top:8px;">数据将在每日 07:00 自动更新</p></div>'; el.tickerDate.textContent = '--'; }
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();