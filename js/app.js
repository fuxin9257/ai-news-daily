/* ===== AI News Daily - Main Application ===== */
(function() {
  'use strict';

  // ===== Category Definitions =====
  const CATEGORIES = {
    product_release: { label: '产品发布', color: '#FF6B35' },
    research_paper: { label: '研究论文', color: '#06A77D' },
    funding: { label: '融资商业', color: '#F7B801' },
    opensource: { label: '开源项目', color: '#00B4D8' },
    regulation: { label: '监管政策', color: '#6C757D' },
    community_hot: { label: '社区热点', color: '#EF476F' }
  };

  // ===== State =====
  const state = {
    currentDate: null,
    data: null,
    isSearchMode: false,
    allItems: null,  // flattened items across all dates for search
    filters: {
      category: 'all',
      search: '',
      heat: 0,
      tag: null
    },
    theme: localStorage.getItem('ai-news-theme') || 'light'
  };

  // ===== DOM Elements =====
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
    archiveList: document.getElementById('archiveList'),
    fabMenu: document.getElementById('fabMenu'),
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebarOverlay')
  };

  // ===== Theme Management =====
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    el.themeToggle.addEventListener('click', toggleTheme);
  }

  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('ai-news-theme', state.theme);
  }

  // ===== Data Loading =====
  function loadDateData(dateStr) {
    return new Promise((resolve, reject) => {
      if (window.NEWS_DATA && window.NEWS_DATA[dateStr]) {
        resolve(window.NEWS_DATA[dateStr]);
        return;
      }
      const script = document.createElement('script');
      script.src = 'data/' + dateStr + '.js?v=' + Date.now();
      script.onload = function() {
        if (window.NEWS_DATA && window.NEWS_DATA[dateStr]) {
          resolve(window.NEWS_DATA[dateStr]);
        } else {
          reject(new Error('Data not found for ' + dateStr));
        }
      };
      script.onerror = function() {
        reject(new Error('Failed to load data for ' + dateStr));
      };
      document.head.appendChild(script);
    });
  }

  // Preload all dates' data for archive counts and global search
  async function preloadAllData() {
    if (!window.NEWS_MANIFEST || !window.NEWS_MANIFEST.dates) return;
    const dates = window.NEWS_MANIFEST.dates;
    const loadPromises = dates.map(function(date) {
      return loadDateData(date).catch(function() { return null; });
    });
    await Promise.all(loadPromises);

    // Build flattened item list
    const all = [];
    dates.forEach(function(date) {
      if (window.NEWS_DATA && window.NEWS_DATA[date] && window.NEWS_DATA[date].items) {
        window.NEWS_DATA[date].items.forEach(function(item) {
          all.push(item);
        });
      }
    });
    state.allItems = all;
  }

  async function switchDate(dateStr) {
    state.currentDate = dateStr;
    state.isSearchMode = false;
    state.filters.category = 'all';
    state.filters.search = '';
    state.filters.heat = 0;
    state.filters.tag = null;
    el.searchInput.value = '';
    el.heatFilter.value = '0';

    try {
      state.data = await loadDateData(dateStr);
      el.columnTitle.textContent = dateStr + ' 动态';
      renderDateSelector();
      renderCategoryFilters();
      renderStatsBar();
      renderCategoryStats();
      renderTagCloud();
      renderArchiveList();
      renderNews();
    } catch (err) {
      console.error('Failed to load date data:', err);
      el.newsList.innerHTML = '<div class="empty-state"><p>数据加载失败：' + err.message + '</p></div>';
    }
  }

  function goToLatest() {
    if (window.NEWS_MANIFEST && window.NEWS_MANIFEST.latest) {
      if (state.currentDate !== window.NEWS_MANIFEST.latest || state.isSearchMode) {
        switchDate(window.NEWS_MANIFEST.latest);
      }
    }
  }

  // ===== Rendering: Date Selector =====
  function renderDateSelector() {
    if (!window.NEWS_MANIFEST || !window.NEWS_MANIFEST.dates) return;
    const dates = window.NEWS_MANIFEST.dates;
    el.dateSelector.innerHTML = '';

    dates.forEach(function(date) {
      const btn = document.createElement('button');
      var isActive = !state.isSearchMode && date === state.currentDate;
      btn.className = 'date-btn' + (isActive ? ' active' : '');
      btn.textContent = date;
      btn.addEventListener('click', function() {
        if (!state.isSearchMode && date === state.currentDate) return;
        switchDate(date);
      });
      el.dateSelector.appendChild(btn);
    });

    // Scroll active date into view
    var activeBtn = el.dateSelector.querySelector('.date-btn.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  // ===== Rendering: Stats Bar =====
  function renderStatsBar() {
    if (state.isSearchMode) {
      // Show global stats in search mode
      var total = state.allItems ? state.allItems.length : 0;
      el.statsBar.innerHTML =
        '<span class="stat-item">全站 <span class="stat-value">' + total + '</span> 条</span>' +
        '<span class="stat-item">日期 <span class="stat-value">' + (window.NEWS_MANIFEST ? window.NEWS_MANIFEST.dates.length : 0) + '</span> 天</span>';
      return;
    }
    if (!state.data) return;
    const d = state.data;
    var actualItems = d.items ? d.items.filter(function(item) { return !item.date || item.date === state.currentDate; }) : [];
    el.statsBar.innerHTML =
      '<span class="stat-item">共 <span class="stat-value">' + actualItems.length + '</span> 条</span>' +
      '<span class="stat-item">5星 <span class="stat-value">' + actualItems.filter(function(i) { return i.heat === 5; }).length + '</span></span>' +
      '<span class="stat-item">分类 <span class="stat-value">' + new Set(actualItems.map(function(i) { return i.category; })).size + '</span></span>';
  }

  function countByHeat(heat) {
    if (!state.data || !state.data.items) return 0;
    return state.data.items.filter(function(item) { return item.heat === heat; }).length;
  }

  // ===== Rendering: Category Filters =====
  function renderCategoryFilters() {
    el.categoryFilters.innerHTML = '';

    const allBtn = createChip('全部', null, state.filters.category === 'all');
    el.categoryFilters.appendChild(allBtn);

    Object.keys(CATEGORIES).forEach(function(key) {
      var hasData = false;
      if (state.isSearchMode) {
        hasData = state.allItems && state.allItems.some(function(item) { return item.category === key; });
      } else {
        hasData = state.data && state.data.categories && state.data.categories[key] > 0;
      }
      if (hasData) {
        const chip = createChip(CATEGORIES[key].label, CATEGORIES[key].color, state.filters.category === key);
        chip.dataset.category = key;
        el.categoryFilters.appendChild(chip);
      }
    });
  }

  function createChip(label, color, active) {
    const chip = document.createElement('button');
    chip.className = 'cat-chip' + (active ? ' active' : '');
    if (color) {
      chip.style.backgroundColor = active ? color : '';
      chip.style.borderColor = active ? 'transparent' : '';
    } else if (active) {
      chip.style.backgroundColor = 'var(--text-primary)';
      chip.style.color = 'var(--bg-primary)';
    }
    if (color) {
      const dot = document.createElement('span');
      dot.className = 'cat-dot';
      dot.style.backgroundColor = color;
      chip.appendChild(dot);
    }
    const text = document.createElement('span');
    text.textContent = label;
    chip.appendChild(text);
    chip.addEventListener('click', function() {
      const cat = chip.dataset.category || 'all';
      state.filters.category = cat;
      renderCategoryFilters();
      renderNews();
    });
    return chip;
  }

  // ===== Get items based on current mode =====
  function getFilteredItems() {
    var items;
    if (state.isSearchMode && state.allItems) {
      items = state.allItems.slice();
    } else if (state.data && state.data.items) {
      // Filter to only show items matching the current date
      items = state.data.items.filter(function(item) {
        return !item.date || item.date === state.currentDate;
      });
    } else {
      return [];
    }

    if (state.filters.category !== 'all') {
      items = items.filter(function(item) { return item.category === state.filters.category; });
    }
    if (state.filters.heat > 0) {
      items = items.filter(function(item) { return item.heat >= state.filters.heat; });
    }
    if (state.filters.tag) {
      items = items.filter(function(item) {
        return item.tags && item.tags.some(function(t) {
          return t.toLowerCase() === state.filters.tag.toLowerCase();
        });
      });
    }
    if (state.filters.search) {
      const q = state.filters.search.toLowerCase();
      items = items.filter(function(item) {
        return (item.title && item.title.toLowerCase().indexOf(q) !== -1) ||
               (item.summary && item.summary.toLowerCase().indexOf(q) !== -1) ||
               (item.detail && item.detail.toLowerCase().indexOf(q) !== -1) ||
               (item.source && item.source.toLowerCase().indexOf(q) !== -1) ||
               (item.tags && item.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1; }));
      });
    }

    // Sort by date desc, then heat desc
    items.sort(function(a, b) {
      var dateCompare = (b.date || '').localeCompare(a.date || '');
      if (dateCompare !== 0) return dateCompare;
      return (b.heat || 0) - (a.heat || 0);
    });

    return items;
  }

  // ===== Rendering: News Cards =====
  function renderNews() {
    var items = getFilteredItems();

    el.itemCount.textContent = items.length + ' 条';

    if (items.length === 0) {
      el.newsList.innerHTML = '';
      el.emptyState.style.display = 'block';
      return;
    }
    el.emptyState.style.display = 'none';

    el.newsList.innerHTML = '';
    items.forEach(function(item) {
      el.newsList.appendChild(createNewsCard(item));
    });
  }

  function createNewsCard(item) {
    const card = document.createElement('article');
    card.className = 'news-card heat-' + (item.heat || 1);

    // Expand indicator
    if (item.detail) {
      const expandIndicator = document.createElement('div');
      expandIndicator.className = 'card-expand-indicator';
      expandIndicator.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';
      card.appendChild(expandIndicator);
    }

    // Header
    const header = document.createElement('div');
    header.className = 'card-header';

    if (item.category && CATEGORIES[item.category]) {
      const catBadge = document.createElement('span');
      catBadge.className = 'card-category';
      catBadge.style.backgroundColor = CATEGORIES[item.category].color;
      catBadge.textContent = CATEGORIES[item.category].label;
      header.appendChild(catBadge);
    }

    const heatDiv = document.createElement('span');
    heatDiv.className = 'card-heat';
    for (var i = 1; i <= 5; i++) {
      var star = document.createElement('span');
      star.className = 'heat-star' + (i <= (item.heat || 0) ? ' filled' : '');
      star.textContent = '\u2605';
      heatDiv.appendChild(star);
    }
    header.appendChild(heatDiv);

    if (item.source) {
      const source = document.createElement('span');
      source.className = 'card-source';
      source.textContent = item.source;
      header.appendChild(source);
    }

    // Show date badge in search mode
    if (state.isSearchMode && item.date) {
      const dateBadge = document.createElement('span');
      dateBadge.className = 'card-source card-date-badge';
      dateBadge.textContent = item.date;
      dateBadge.style.color = 'var(--accent)';
      dateBadge.style.fontWeight = '500';
      header.appendChild(dateBadge);
    }

    card.appendChild(header);

    // Title
    const title = document.createElement('h3');
    title.className = 'card-title';
    if (item.url) {
      const link = document.createElement('a');
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = item.title || '无标题';
      link.addEventListener('click', function(e) { e.stopPropagation(); });
      title.appendChild(link);
    } else {
      title.textContent = item.title || '无标题';
    }
    card.appendChild(title);

    // Summary
    if (item.summary) {
      const summary = document.createElement('p');
      summary.className = 'card-summary';
      summary.textContent = item.summary;
      card.appendChild(summary);
    }

    // Detail (expandable)
    if (item.detail) {
      const detailWrap = document.createElement('div');
      detailWrap.className = 'card-detail';
      const detailInner = document.createElement('div');
      detailInner.className = 'card-detail-inner';
      const detailLabel = document.createElement('span');
      detailLabel.className = 'detail-label';
      detailLabel.textContent = '详细';
      detailInner.appendChild(detailLabel);
      const paragraphs = item.detail.split(/\n\s*\n/);
      paragraphs.forEach(function(p) {
        const pEl = document.createElement('p');
        pEl.textContent = p.trim();
        detailInner.appendChild(pEl);
      });
      detailWrap.appendChild(detailInner);
      card.appendChild(detailWrap);
    }

    // Footer
    const footer = document.createElement('div');
    footer.className = 'card-footer';

    if (item.tags && item.tags.length > 0) {
      const tagsDiv = document.createElement('div');
      tagsDiv.className = 'card-tags';
      item.tags.forEach(function(tag) {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.textContent = tag;
        tagEl.addEventListener('click', function(e) {
          e.stopPropagation();
          state.filters.tag = state.filters.tag === tag ? null : tag;
          renderNews();
        });
        tagsDiv.appendChild(tagEl);
      });
      footer.appendChild(tagsDiv);
    }

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    if (item.date) {
      const dateSpan = document.createElement('span');
      dateSpan.textContent = item.date;
      meta.appendChild(dateSpan);
    }
    if (item.url) {
      const readLink = document.createElement('a');
      readLink.className = 'read-link';
      readLink.href = item.url;
      readLink.target = '_blank';
      readLink.rel = 'noopener noreferrer';
      readLink.textContent = '阅读原文 \u2192';
      readLink.addEventListener('click', function(e) { e.stopPropagation(); });
      meta.appendChild(readLink);
    }
    footer.appendChild(meta);

    card.appendChild(footer);

    // Click to toggle expand
    if (item.detail) {
      card.addEventListener('click', function() {
        const isExpanded = card.classList.contains('expanded');
        document.querySelectorAll('.news-card.expanded').forEach(function(c) {
          if (c !== card) c.classList.remove('expanded');
        });
        card.classList.toggle('expanded', !isExpanded);
      });
    }

    return card;
  }

  // Collapse all expanded cards when clicking outside
  function initClickOutsideHandler() {
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.news-card')) {
        document.querySelectorAll('.news-card.expanded').forEach(function(card) {
          card.classList.remove('expanded');
        });
      }
    });
  }

  // ===== Rendering: Sidebar =====
  function renderCategoryStats() {
    el.categoryStats.innerHTML = '';
    var sourceData = state.isSearchMode ? null : state.data;

    Object.keys(CATEGORIES).forEach(function(key) {
      var count = 0;
      if (state.isSearchMode && state.allItems) {
        count = state.allItems.filter(function(item) { return item.category === key; }).length;
      } else if (sourceData && sourceData.categories) {
        count = sourceData.categories[key] || 0;
      }
      if (count > 0) {
        const row = document.createElement('div');
        row.className = 'cat-stat-row';

        const left = document.createElement('div');
        left.className = 'cat-stat-left';
        const dot = document.createElement('span');
        dot.className = 'cat-stat-dot';
        dot.style.backgroundColor = CATEGORIES[key].color;
        const label = document.createElement('span');
        label.textContent = CATEGORIES[key].label;
        left.appendChild(dot);
        left.appendChild(label);
        left.addEventListener('click', function() {
          state.filters.category = key;
          renderCategoryFilters();
          renderNews();
          closeSidebar();
        });

        const countEl = document.createElement('span');
        countEl.className = 'cat-stat-count';
        countEl.textContent = count;

        row.appendChild(left);
        row.appendChild(countEl);
        el.categoryStats.appendChild(row);
      }
    });
  }

  function renderTagCloud() {
    var items = state.isSearchMode ? state.allItems : (state.data ? state.data.items : null);
    if (!items) {
      el.tagCloud.innerHTML = '';
      return;
    }

    const tagCounts = {};
    items.forEach(function(item) {
      if (item.tags) {
        item.tags.forEach(function(tag) {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
      }
    });

    const sorted = Object.keys(tagCounts).sort(function(a, b) { return tagCounts[b] - tagCounts[a]; }).slice(0, 15);

    el.tagCloud.innerHTML = '';
    sorted.forEach(function(tag) {
      const tagEl = document.createElement('span');
      tagEl.className = 'tag';
      tagEl.textContent = tag + ' (' + tagCounts[tag] + ')';
      if (state.filters.tag === tag) {
        tagEl.style.color = 'var(--accent)';
        tagEl.style.borderColor = 'var(--accent)';
        tagEl.style.background = 'var(--accent-soft)';
      }
      tagEl.addEventListener('click', function() {
        state.filters.tag = state.filters.tag === tag ? null : tag;
        renderTagCloud();
        renderNews();
        closeSidebar();
      });
      el.tagCloud.appendChild(tagEl);
    });
  }

  function renderArchiveList() {
    if (!window.NEWS_MANIFEST || !window.NEWS_MANIFEST.dates) return;
    // Show newest dates first
    var dates = window.NEWS_MANIFEST.dates.slice().reverse();
    const counts = window.NEWS_MANIFEST.counts || {};

    el.archiveList.innerHTML = '';
    dates.forEach(function(date) {
      const item = document.createElement('div');
      item.className = 'archive-item' + (!state.isSearchMode && date === state.currentDate ? ' active' : '');

      const dateSpan = document.createElement('span');
      dateSpan.className = 'archive-date';
      dateSpan.textContent = date;

      var count = counts[date];
      if (count === undefined && window.NEWS_DATA && window.NEWS_DATA[date]) {
        count = window.NEWS_DATA[date].total_count;
      }
      if (count === undefined) count = 0;

      const countSpan = document.createElement('span');
      countSpan.className = 'archive-count';
      countSpan.textContent = count + ' 条';

      item.appendChild(dateSpan);
      item.appendChild(countSpan);
      item.addEventListener('click', function() {
        if (state.isSearchMode || date !== state.currentDate) {
          switchDate(date);
        }
        closeSidebar();
      });
      el.archiveList.appendChild(item);
    });
  }

  // ===== Search Mode =====
  function enterSearchMode(query) {
    state.isSearchMode = true;
    state.filters.category = 'all';
    state.filters.heat = 0;
    state.filters.tag = null;
    el.heatFilter.value = '0';

    el.columnTitle.textContent = '搜索：' + query;
    renderDateSelector();
    renderCategoryFilters();
    renderStatsBar();
    renderCategoryStats();
    renderTagCloud();
    renderArchiveList();
    renderNews();
  }

  function exitSearchMode() {
    state.filters.search = '';
    el.searchInput.value = '';
    goToLatest();
  }

  // ===== Event Listeners =====
  function initEvents() {
    el.searchInput.addEventListener('input', function(e) {
      var q = e.target.value.trim();
      state.filters.search = q;

      if (q.length > 0) {
        enterSearchMode(q);
      } else {
        exitSearchMode();
      }
    });

    el.heatFilter.addEventListener('change', function(e) {
      state.filters.heat = parseInt(e.target.value, 10);
      renderNews();
    });

    el.dateTicker.addEventListener('click', goToLatest);

    el.clearFilters.addEventListener('click', function() {
      state.filters.category = 'all';
      state.filters.search = '';
      state.filters.heat = 0;
      state.filters.tag = null;
      el.searchInput.value = '';
      el.heatFilter.value = '0';
      if (state.isSearchMode) {
        goToLatest();
      } else {
        renderCategoryFilters();
        renderTagCloud();
        renderNews();
      }
    });

    // Mobile drawer: FAB toggle
    if (el.fabMenu) {
      el.fabMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        el.sidebar.classList.toggle('open');
        el.sidebarOverlay.classList.toggle('visible');
      });
    }
    if (el.sidebarOverlay) {
      el.sidebarOverlay.addEventListener('click', closeSidebar);
    }
  }

  function closeSidebar() {
    if (el.sidebar) el.sidebar.classList.remove('open');
    if (el.sidebarOverlay) el.sidebarOverlay.classList.remove('visible');
  }

  // ===== Initialize =====
  async function init() {
    initTheme();
    initEvents();
    initClickOutsideHandler();

    // Set ticker to always show latest date
    if (window.NEWS_MANIFEST && window.NEWS_MANIFEST.latest) {
      el.tickerDate.textContent = window.NEWS_MANIFEST.latest;
    }

    // Preload all data in background
    preloadAllData().then(function() {
      renderArchiveList();
    });

    // Load latest date first
    if (window.NEWS_MANIFEST && window.NEWS_MANIFEST.dates && window.NEWS_MANIFEST.dates.length > 0) {
      const latest = window.NEWS_MANIFEST.latest || window.NEWS_MANIFEST.dates[window.NEWS_MANIFEST.dates.length - 1];
      await switchDate(latest);
    } else {
      el.newsList.innerHTML = '<div class="empty-state"><p>暂无新闻数据</p><p style="font-size:13px;margin-top:8px;">数据将在每日 07:00 自动更新</p></div>';
      el.tickerDate.textContent = '--';
    }
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
