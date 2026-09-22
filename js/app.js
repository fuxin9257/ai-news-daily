/* ===== AI News Daily - Main Application ===== */
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
    currentDate: null,
    data: null,
    isSearchMode: false,
    allItems: null,
    filters: { category: 'all', search: '', heat: 0, tag: null },
    theme: localStorage.getItem('ai-news-theme') || 'light'
  };

  const el = {
    themeToggle: document.getElementById('themeToggle'),
    dateTicker: document.getElementById('dateTicker'),
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

  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    el.themeToggle.addEventListener('click', toggleTheme);
  }
  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('ai-news-theme', state.theme);
  }

  function loadDateData(dateStr) {
    return new Promise(function(resolve, reject) {
      if (window.NEWS_DATA && window.NEWS_DATA[dateStr]) { resolve(window.NEWS_DATA[dateStr]); return; }
      const script = document.createElement('script');
      script.src = 'data/' + dateStr + '.js';
      script.onload = function() {
        if (window.NEWS_DATA && window.NEWS_DATA[dateStr]) resolve(window.NEWS_DATA[dateStr]);
        else reject(new Error('Data not found for ' + dateStr));
      };
      script.onerror = function() { reject(new Error('Failed to load ' + dateStr)); };
      document.head.appendChild(script);
    });
  }

  async function preloadAllData() {
    if (!window.NEWS_MANIFEST || !window.NEWS_MANIFEST.dates) return;
    const dates = window.NEWS_MANIFEST.dates;
    await Promise.all(dates.map(function(d) { return loadDateData(d).catch(function() { return null; }); }));
    const all = [];
    dates.forEach(function(date) {
      if (window.NEWS_DATA && window.NEWS_DATA[date] && window.NEWS_DATA[date].items) {
        window.NEWS_DATA[date].items.forEach(function(item) { all.push(item); });
      }
    });
    state.allItems = all;
  }

  async function switchDate(dateStr) {
    state.currentDate = dateStr;
    state.isSearchMode = false;
    state.filters = { category: 'all', search: '', heat: 0, tag: null };
    el.searchInput.value = '';
    el.heatFilter.value = '0';
    try {
      state.data = await loadDateData(dateStr);
      el.columnTitle.textContent = dateStr + ' 动态';
      renderDateSelector(); renderCategoryFilters(); renderStatsBar();
      renderCategoryStats(); renderTagCloud(); renderArchiveList(); renderNews();
    } catch (err) {
      el.newsList.innerHTML = '<div class="empty-state"><p>加载失败：' + err.message + '</p></div>';
    }
  }

  function goToLatest() {
    if (window.NEWS_MANIFEST && window.NEWS_MANIFEST.latest) {
      if (state.currentDate !== window.NEWS_MANIFEST.latest || state.isSearchMode) switchDate(window.NEWS_MANIFEST.latest);
    }
  }

  function renderDateSelector() {
    if (!window.NEWS_MANIFEST || !window.NEWS_MANIFEST.dates) return;
    el.dateSelector.innerHTML = '';
    window.NEWS_MANIFEST.dates.forEach(function(date) {
      var isActive = !state.isSearchMode && date === state.currentDate;
      var btn = document.createElement('button');
      btn.className = 'date-btn' + (isActive ? ' active' : '');
      btn.textContent = date;
      btn.addEventListener('click', function() {
        if (!state.isSearchMode && date === state.currentDate) return;
        switchDate(date);
      });
      el.dateSelector.appendChild(btn);
    });
    var activeBtn = el.dateSelector.querySelector('.date-btn.active');
    if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  function renderStatsBar() {
    if (state.isSearchMode) {
      var total = state.allItems ? state.allItems.length : 0;
      el.statsBar.innerHTML = '<span class="stat-item">全站 <span class="stat-value">' + total + '</span> 条</span>' +
        '<span class="stat-item">日期 <span class="stat-value">' + (window.NEWS_MANIFEST ? window.NEWS_MANIFEST.dates.length : 0) + '</span> 天</span>';
      return;
    }
    if (!state.data) return;
    var d = state.data;
    el.statsBar.innerHTML =
      '<span class="stat-item">共 <span class="stat-value">' + d.total_count + '</span> 条</span>' +
      '<span class="stat-item">5星 <span class="stat-value">' + countByHeat(5) + '</span></span>' +
      '<span class="stat-item">分类 <span class="stat-value">' + Object.keys(d.categories || {}).length + '</span></span>';
  }
  function countByHeat(h) {
    if (!state.data || !state.data.items) return 0;
    return state.data.items.filter(function(i) { return i.heat === h; }).length;
  }

  function renderCategoryFilters() {
    el.categoryFilters.innerHTML = '';
    el.categoryFilters.appendChild(createChip('全部', null, state.filters.category === 'all'));
    Object.keys(CATEGORIES).forEach(function(key) {
      var hasData = false;
      if (state.isSearchMode) hasData = state.allItems && state.allItems.some(function(i) { return i.category === key; });
      else hasData = state.data && state.data.categories && state.data.categories[key] > 0;
      if (hasData) {
        var chip = createChip(CATEGORIES[key].label, CATEGORIES[key].color, state.filters.category === key);
        chip.dataset.category = key;
        el.categoryFilters.appendChild(chip);
      }
    });
  }

  function createChip(label, color, active) {
    var chip = document.createElement('button');
    chip.className = 'cat-chip' + (active ? ' active' : '');
    if (color) { chip.style.backgroundColor = active ? color : ''; chip.style.borderColor = active ? 'transparent' : ''; }
    else if (active) { chip.style.backgroundColor = 'var(--text-primary)'; chip.style.color = 'var(--bg-primary)'; }
    if (color) { var dot = document.createElement('span'); dot.className = 'cat-dot'; dot.style.backgroundColor = color; chip.appendChild(dot); }
    var text = document.createElement('span'); text.textContent = label; chip.appendChild(text);
    chip.addEventListener('click', function() {
      state.filters.category = chip.dataset.category || 'all';
      renderCategoryFilters(); renderNews();
    });
    return chip;
  }

  function getFilteredItems() {
    var items;
    if (state.isSearchMode && state.allItems) items = state.allItems.slice();
    else if (state.data && state.data.items) items = state.data.items.slice();
    else return [];
    if (state.filters.category !== 'all') items = items.filter(function(i) { return i.category === state.filters.category; });
    if (state.filters.heat > 0) items = items.filter(function(i) { return i.heat >= state.filters.heat; });
    if (state.filters.tag) items = items.filter(function(i) { return i.tags && i.tags.some(function(t) { return t.toLowerCase() === state.filters.tag.toLowerCase(); }); });
    if (state.filters.search) {
      var q = state.filters.search.toLowerCase();
      items = items.filter(function(i) {
        return (i.title && i.title.toLowerCase().indexOf(q) !== -1) ||
               (i.summary && i.summary.toLowerCase().indexOf(q) !== -1) ||
               (i.detail && i.detail.toLowerCase().indexOf(q) !== -1) ||
               (i.source && i.source.toLowerCase().indexOf(q) !== -1) ||
               (i.tags && i.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1; }));
      });
    }
    items.sort(function(a, b) {
      var dc = (b.date || '').localeCompare(a.date || '');
      return dc !== 0 ? dc : (b.heat || 0) - (a.heat || 0);
    });
    return items;
  }

  function renderNews() {
    var items = getFilteredItems();
    el.itemCount.textContent = items.length + ' 条';
    if (items.length === 0) { el.newsList.innerHTML = ''; el.emptyState.style.display = 'block'; return; }
    el.emptyState.style.display = 'none';
    el.newsList.innerHTML = '';
    items.forEach(function(item) { el.newsList.appendChild(createNewsCard(item)); });
  }

  function createNewsCard(item) {
    var card = document.createElement('article');
    card.className = 'news-card heat-' + (item.heat || 1);
    if (item.detail) {
      var ind = document.createElement('div');
      ind.className = 'card-expand-indicator';
      ind.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';
      card.appendChild(ind);
    }
    var header = document.createElement('div');
    header.className = 'card-header';
    if (item.category && CATEGORIES[item.category]) {
      var badge = document.createElement('span');
      badge.className = 'card-category';
      badge.style.backgroundColor = CATEGORIES[item.category].color;
      badge.textContent = CATEGORIES[item.category].label;
      header.appendChild(badge);
    }
    var heatDiv = document.createElement('span');
    heatDiv.className = 'card-heat';
    for (var i = 1; i <= 5; i++) {
      var s = document.createElement('span');
      s.className = 'heat-star' + (i <= (item.heat || 0) ? ' filled' : '');
      s.textContent = '\u2605';
      heatDiv.appendChild(s);
    }
    header.appendChild(heatDiv);
    if (item.source) { var src = document.createElement('span'); src.className = 'card-source'; src.textContent = item.source; header.appendChild(src); }
    if (state.isSearchMode && item.date) {
      var db = document.createElement('span');
      db.className = 'card-source';
      db.textContent = item.date;
      db.style.color = 'var(--accent)';
      db.style.fontWeight = '500';
      header.appendChild(db);
    }
    card.appendChild(header);
    var title = document.createElement('h3');
    title.className = 'card-title';
    if (item.url) {
      var link = document.createElement('a');
      link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = item.title || '无标题';
      link.addEventListener('click', function(e) { e.stopPropagation(); });
      title.appendChild(link);
    } else { title.textContent = item.title || '无标题'; }
    card.appendChild(title);
    if (item.summary) { var sm = document.createElement('p'); sm.className = 'card-summary'; sm.textContent = item.summary; card.appendChild(sm); }
    if (item.detail) {
      var dw = document.createElement('div');
      dw.className = 'card-detail';
      var di = document.createElement('div');
      di.className = 'card-detail-inner';
      var dl = document.createElement('span');
      dl.className = 'detail-label';
      dl.textContent = '详细';
      di.appendChild(dl);
      item.detail.split(/\n\s*\n/).forEach(function(p) {
        var pe = document.createElement('p');
        pe.textContent = p.trim();
        di.appendChild(pe);
      });
      dw.appendChild(di);
      card.appendChild(dw);
    }
    var footer = document.createElement('div');
    footer.className = 'card-footer';
    if (item.tags && item.tags.length) {
      var td = document.createElement('div');
      td.className = 'card-tags';
      item.tags.forEach(function(tag) {
        var te = document.createElement('span');
        te.className = 'tag';
        te.textContent = tag;
        te.addEventListener('click', function(e) {
          e.stopPropagation();
          state.filters.tag = state.filters.tag === tag ? null : tag;
          renderNews();
        });
        td.appendChild(te);
      });
      footer.appendChild(td);
    }
    var meta = document.createElement('div');
    meta.className = 'card-meta';
    if (item.date) { var ds = document.createElement('span'); ds.textContent = item.date; meta.appendChild(ds); }
    if (item.url) {
      var rl = document.createElement('a');
      rl.className = 'read-link';
      rl.href = item.url; rl.target = '_blank'; rl.rel = 'noopener noreferrer';
      rl.textContent = '阅读原文 \u2192';
      rl.addEventListener('click', function(e) { e.stopPropagation(); });
      meta.appendChild(rl);
    }
    footer.appendChild(meta);
    card.appendChild(footer);
    if (item.detail) {
      card.addEventListener('click', function() {
        var isExp = card.classList.contains('expanded');
        document.querySelectorAll('.news-card.expanded').forEach(function(c) { if (c !== card) c.classList.remove('expanded'); });
        card.classList.toggle('expanded', !isExp);
      });
    }
    return card;
  }

  function initClickOutsideHandler() {
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.news-card')) {
        document.querySelectorAll('.news-card.expanded').forEach(function(c) { c.classList.remove('expanded'); });
      }
    });
  }

  function renderCategoryStats() {
    el.categoryStats.innerHTML = '';
    Object.keys(CATEGORIES).forEach(function(key) {
      var count = 0;
      if (state.isSearchMode && state.allItems) count = state.allItems.filter(function(i) { return i.category === key; }).length;
      else if (state.data && state.data.categories) count = state.data.categories[key] || 0;
      if (count > 0) {
        var row = document.createElement('div'); row.className = 'cat-stat-row';
        var left = document.createElement('div'); left.className = 'cat-stat-left';
        var dot = document.createElement('span'); dot.className = 'cat-stat-dot'; dot.style.backgroundColor = CATEGORIES[key].color;
        var lb = document.createElement('span'); lb.textContent = CATEGORIES[key].label;
        left.appendChild(dot); left.appendChild(lb);
        left.addEventListener('click', function() { state.filters.category = key; renderCategoryFilters(); renderNews(); });
        var ce = document.createElement('span'); ce.className = 'cat-stat-count'; ce.textContent = count;
        row.appendChild(left); row.appendChild(ce); el.categoryStats.appendChild(row);
      }
    });
  }

  function renderTagCloud() {
    var items = state.isSearchMode ? state.allItems : (state.data ? state.data.items : null);
    if (!items) { el.tagCloud.innerHTML = ''; return; }
    var tc = {};
    items.forEach(function(i) { if (i.tags) i.tags.forEach(function(t) { tc[t] = (tc[t]||0)+1; }); });
    var sorted = Object.keys(tc).sort(function(a,b) { return tc[b]-tc[a]; }).slice(0, 15);
    el.tagCloud.innerHTML = '';
    sorted.forEach(function(tag) {
      var te = document.createElement('span');
      te.className = 'tag';
      te.textContent = tag + ' (' + tc[tag] + ')';
      if (state.filters.tag === tag) { te.style.color = 'var(--accent)'; te.style.borderColor = 'var(--accent)'; te.style.background = 'var(--accent-soft)'; }
      te.addEventListener('click', function() { state.filters.tag = state.filters.tag === tag ? null : tag; renderTagCloud(); renderNews(); });
      el.tagCloud.appendChild(te);
    });
  }

  function renderArchiveList() {
    if (!window.NEWS_MANIFEST || !window.NEWS_MANIFEST.dates) return;
    var dates = window.NEWS_MANIFEST.dates;
    var counts = window.NEWS_MANIFEST.counts || {};
    el.archiveList.innerHTML = '';
    dates.forEach(function(date) {
      var item = document.createElement('div');
      item.className = 'archive-item' + (!state.isSearchMode && date === state.currentDate ? ' active' : '');
      var dSp = document.createElement('span'); dSp.className = 'archive-date'; dSp.textContent = date;
      var count = counts[date];
      if (count === undefined && window.NEWS_DATA && window.NEWS_DATA[date]) count = window.NEWS_DATA[date].total_count;
      if (count === undefined) count = 0;
      var cSp = document.createElement('span'); cSp.className = 'archive-count'; cSp.textContent = count + ' 条';
      item.appendChild(dSp); item.appendChild(cSp);
      item.addEventListener('click', function() { if (state.isSearchMode || date !== state.currentDate) switchDate(date); });
      el.archiveList.appendChild(item);
    });
  }

  function enterSearchMode(query) {
    state.isSearchMode = true;
    state.filters.category = 'all'; state.filters.heat = 0; state.filters.tag = null;
    el.heatFilter.value = '0';
    el.columnTitle.textContent = '搜索：' + query;
    renderDateSelector(); renderCategoryFilters(); renderStatsBar();
    renderCategoryStats(); renderTagCloud(); renderArchiveList(); renderNews();
  }
  function exitSearchMode() { state.filters.search = ''; el.searchInput.value = ''; goToLatest(); }

  function initEvents() {
    el.searchInput.addEventListener('input', function(e) {
      var q = e.target.value.trim();
      state.filters.search = q;
      if (q.length > 0) enterSearchMode(q); else exitSearchMode();
    });
    el.heatFilter.addEventListener('change', function(e) { state.filters.heat = parseInt(e.target.value, 10); renderNews(); });
    el.dateTicker.addEventListener('click', goToLatest);
    el.clearFilters.addEventListener('click', function() {
      state.filters = { category: 'all', search: '', heat: 0, tag: null };
      el.searchInput.value = ''; el.heatFilter.value = '0';
      if (state.isSearchMode) goToLatest();
      else { renderCategoryFilters(); renderTagCloud(); renderNews(); }
    });
  }

  async function init() {
    initTheme(); initEvents(); initClickOutsideHandler();
    if (window.NEWS_MANIFEST && window.NEWS_MANIFEST.latest) el.tickerDate.textContent = window.NEWS_MANIFEST.latest;
    preloadAllData().then(function() { renderArchiveList(); });
    if (window.NEWS_MANIFEST && window.NEWS_MANIFEST.dates && window.NEWS_MANIFEST.dates.length > 0) {
      var latest = window.NEWS_MANIFEST.latest || window.NEWS_MANIFEST.dates[window.NEWS_MANIFEST.dates.length - 1];
      await switchDate(latest);
    } else {
      el.newsList.innerHTML = '<div class="empty-state"><p>暂无新闻数据</p></div>';
      el.tickerDate.textContent = '--';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
