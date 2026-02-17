// ==================== DATA ====================

const CAT_ICONS = {
  Flights: '✈️', Hotel: '🏨', Food: '🍜', Transport: '🚌',
  Activities: '🎭', Shopping: '🛍️', Other: '📌'
};

const CAT_COLORS = {
  Flights: '#c0603c', Hotel: '#7a9e8a', Food: '#c49a3c',
  Transport: '#5078c8', Activities: '#a855f7', Shopping: '#e06090', Other: '#888'
};

const ACTIVITY_COLORS = {
  food: '#c0603c', sight: '#7a9e8a', transport: '#c49a3c',
  hotel: '#6450c8', activity: '#5078c8'
};

let trips = JSON.parse(localStorage.getItem('wl_trips')) || [
  {
    id: 1, title: 'Kyoto & Tokyo, Japan', status: 'upcoming',
    startDate: '2026-03-15', endDate: '2026-03-28',
    travelers: 2, budget: 4200, emoji: '🇯🇵',
    gradient: 'linear-gradient(135deg, #c0603c, #a04828)',
    desc: 'Cherry blossoms, ancient temples, and world-class cuisine.'
  },
  {
    id: 2, title: 'Amalfi Coast, Italy', status: 'planning',
    startDate: '2026-07-10', endDate: '2026-07-21',
    travelers: 2, budget: 5800, emoji: '🇮🇹',
    gradient: 'linear-gradient(135deg, #4a8ec0, #2a6ea0)',
    desc: 'Cliffside villages, turquoise waters, and lemon everything.'
  },
  {
    id: 3, title: 'Morocco — Marrakech & Sahara', status: 'planning',
    startDate: '2026-10-05', endDate: '2026-10-14',
    travelers: 3, budget: 3200, emoji: '🇲🇦',
    gradient: 'linear-gradient(135deg, #c49a3c, #8b6820)',
    desc: 'Medinas, desert dunes, and the warmth of Moroccan hospitality.'
  },
  {
    id: 4, title: 'Bali, Indonesia', status: 'past',
    startDate: '2025-04-02', endDate: '2025-04-14',
    travelers: 2, budget: 2800, emoji: '🇮🇩',
    gradient: 'linear-gradient(135deg, #7a9e8a, #4a7a5a)',
    desc: 'Rice terraces, temple ceremonies, and infinity pools.'
  },
  {
    id: 5, title: 'Scotland Highlands', status: 'past',
    startDate: '2024-09-10', endDate: '2024-09-18',
    travelers: 4, budget: 3100, emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    gradient: 'linear-gradient(135deg, #556b8a, #2a3a5a)',
    desc: 'Misty lochs, ancient castles, and dramatic Highland scenery.'
  },
];

let expenses = JSON.parse(localStorage.getItem('wl_expenses')) || [
  { id: 1, name: 'Tokyo → Kyoto Shinkansen', category: 'Transport', amount: 140, date: '2026-03-20' },
  { id: 2, name: 'Fushimi Inari Taisha', category: 'Activities', amount: 0, date: '2026-03-21' },
  { id: 3, name: 'Ramen Dinner, Nishiki Market', category: 'Food', amount: 28, date: '2026-03-22' },
  { id: 4, name: 'Airbnb — Traditional Machiya', category: 'Hotel', amount: 890, date: '2026-03-15' },
  { id: 5, name: 'Return Flights (2 pax)', category: 'Flights', amount: 1650, date: '2026-03-15' },
  { id: 6, name: 'Kyoto ceramics market', category: 'Shopping', amount: 95, date: '2026-03-24' },
  { id: 7, name: 'Arashiyama bamboo forest & rental', category: 'Activities', amount: 45, date: '2026-03-23' },
  { id: 8, name: 'Sushi dinner, Tsukiji', category: 'Food', amount: 120, date: '2026-03-26' },
];

let packingList = JSON.parse(localStorage.getItem('wl_packing')) || {
  'Clothing': [
    { id: 1, name: 'T-shirts (5)', packed: true },
    { id: 2, name: 'Comfortable walking shoes', packed: true },
    { id: 3, name: 'Light rain jacket', packed: false },
    { id: 4, name: 'Smart casual outfit', packed: false },
    { id: 5, name: 'Warm layers (evenings)', packed: false },
  ],
  'Documents': [
    { id: 6, name: 'Passport (valid 6+ months)', packed: true },
    { id: 7, name: 'Travel insurance docs', packed: true },
    { id: 8, name: 'Hotel booking confirmations', packed: false },
    { id: 9, name: 'IC card (Suica) printed info', packed: false },
  ],
  'Tech & Gadgets': [
    { id: 10, name: 'Universal power adapter', packed: false },
    { id: 11, name: 'Portable charger', packed: true },
    { id: 12, name: 'Camera + memory cards', packed: false },
    { id: 13, name: 'Noise-cancelling headphones', packed: false },
  ],
  'Toiletries': [
    { id: 14, name: 'SPF 50 sunscreen', packed: true },
    { id: 15, name: 'Travel-sized toiletries', packed: false },
    { id: 16, name: 'Hand sanitiser', packed: true },
  ],
  'Health & Safety': [
    { id: 17, name: 'Prescription medication', packed: false },
    { id: 18, name: 'First aid kit basics', packed: false },
    { id: 19, name: 'Blister plasters', packed: true },
  ],
};

let wishlist = JSON.parse(localStorage.getItem('wl_wish')) || [
  { id: 1, flag: '🇵🇹', dest: 'Porto, Portugal', dream: 'Wine caves & azulejo tiles' },
  { id: 2, flag: '🇳🇵', dest: 'Nepal', dream: 'Annapurna Base Camp trek' },
  { id: 3, flag: '🇦🇷', dest: 'Patagonia, Argentina', dream: 'Torres del Paine & glaciers' },
  { id: 4, flag: '🇮🇸', dest: 'Iceland', dream: 'Northern lights & hot springs' },
];

const itineraryData = [
  {
    day: 1, date: 'Mar 15', title: 'Arrival — Tokyo',
    items: [
      { time: '14:30', icon: '✈️', name: 'Land at Narita International Airport', note: 'Terminal 2 · Collect bags & clear customs', type: 'transport' },
      { time: '17:00', icon: '🚆', name: 'Narita Express to Shinjuku Station', note: '~80 min · Book ticket in advance', type: 'transport' },
      { time: '18:30', icon: '🏨', name: 'Check-in: Shinjuku Granbell Hotel', note: 'Early check-in confirmed', type: 'hotel' },
      { time: '20:00', icon: '🍜', name: 'Dinner — Ichiran Ramen, Shinjuku', note: 'Solo ramen booths, iconic experience', type: 'food' },
    ]
  },
  {
    day: 2, date: 'Mar 16', title: 'Tokyo — Asakusa & Shibuya',
    items: [
      { time: '08:00', icon: '☕', name: 'Breakfast at hotel + coffee', note: 'Energise for the day', type: 'food' },
      { time: '09:30', icon: '⛩️', name: 'Senso-ji Temple, Asakusa', note: 'Tokyo\'s oldest temple · Arrive early to avoid crowds', type: 'sight' },
      { time: '12:30', icon: '🍱', name: 'Lunch — Nakamise-dori street food', note: 'Try ningyo-yaki and senbei', type: 'food' },
      { time: '15:00', icon: '🛍️', name: 'Harajuku & Takeshita Street', note: 'Quirky fashion & crepes', type: 'sight' },
      { time: '18:30', icon: '🌆', name: 'Shibuya Crossing at dusk', note: 'Watch from Starbucks overlooking the crossing', type: 'sight' },
      { time: '20:00', icon: '🍣', name: 'Dinner — Conveyor belt sushi', note: 'Budget ¥2,000 per person', type: 'food' },
    ]
  },
  {
    day: 3, date: 'Mar 17', title: 'Kyoto — Arrival & Gion',
    items: [
      { time: '08:30', icon: '🚄', name: 'Shinkansen Tokyo → Kyoto', note: '~2h 15min · Window seat for Mt. Fuji views', type: 'transport' },
      { time: '11:00', icon: '🏨', name: 'Check-in: Kyoto Machiya Townhouse', note: 'Traditional wooden townhouse, private', type: 'hotel' },
      { time: '14:00', icon: '⛩️', name: 'Fushimi Inari Taisha Shrine', note: 'Walk the full 2-hour loop for fewer crowds', type: 'sight' },
      { time: '18:00', icon: '🏮', name: 'Gion district evening walk', note: 'Best chance to spot maiko at dusk', type: 'sight' },
      { time: '19:30', icon: '🍶', name: 'Dinner — Kaiseki omakase', note: 'Pre-booked at Nishiki Kitchen ★', type: 'food' },
    ]
  },
  {
    day: 4, date: 'Mar 18', title: 'Arashiyama & Bamboo Grove',
    items: [
      { time: '07:00', icon: '🎋', name: 'Arashiyama Bamboo Grove (dawn)', note: 'Go at 7am before crowds arrive', type: 'sight' },
      { time: '09:00', icon: '🐒', name: 'Iwatayama Monkey Park', note: '20 min uphill hike, stunning city views', type: 'activity' },
      { time: '11:30', icon: '🚣', name: 'Hozu River Boat Ride', note: 'Scenic 16km, ~2 hours', type: 'activity' },
      { time: '14:30', icon: '🍵', name: 'Matcha tea ceremony', note: 'En-nichi Tea House · Book in advance', type: 'activity' },
      { time: '19:00', icon: '🍜', name: 'Dinner — Pontocho Alley', note: 'Narrow lantern-lit dining street', type: 'food' },
    ]
  },
];

const weatherData = [
  { day: 'Mon Mar 16', icon: '☀️', temp: '14°C', range: '9–14°' },
  { day: 'Tue Mar 17', icon: '⛅', temp: '12°C', range: '8–12°' },
  { day: 'Wed Mar 18', icon: '🌸', temp: '16°C', range: '10–16°' },
  { day: 'Thu Mar 19', icon: '☀️', temp: '18°C', range: '11–18°' },
  { day: 'Fri Mar 20', icon: '🌧️', temp: '11°C', range: '9–11°' },
];

const tips = [
  { icon: '🗺️', title: 'Golden Rule', text: 'Overplan activities, underplan free time. The best travel moments are often unscripted.' },
  { icon: '💳', title: 'Money Matters', text: 'Notify your bank before departure. Japan is still largely cash-based — carry yen.' },
  { icon: '📱', title: 'Stay Connected', text: 'A pocket WiFi device beats SIM cards for multi-city Japan travel.' },
];

// ==================== UTILS ====================

const save = () => {
  localStorage.setItem('wl_trips', JSON.stringify(trips));
  localStorage.setItem('wl_expenses', JSON.stringify(expenses));
  localStorage.setItem('wl_packing', JSON.stringify(packingList));
  localStorage.setItem('wl_wish', JSON.stringify(wishlist));
};

const fmt = (n) => '$' + parseFloat(n).toLocaleString('en-US', { minimumFractionDigits: 0 });
const fmtFull = (n) => '$' + parseFloat(n).toLocaleString('en-US', { minimumFractionDigits: 2 });

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function formatDate(str) {
  return new Date(str).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function countdownDays() {
  const upcoming = trips
    .filter(t => t.status === 'upcoming')
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))[0];

  if (!upcoming) return;

  const diff = Math.ceil((new Date(upcoming.startDate) - new Date()) / (1000 * 60 * 60 * 24));
  document.getElementById('countdownDays').textContent = Math.max(0, diff);
  document.getElementById('sidebarDest').textContent = upcoming.title;

  const s = new Date(upcoming.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const e = new Date(upcoming.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  document.getElementById('sidebarDates').textContent = `${s} – ${e}`;
}

// ==================== NAVIGATION ====================

window.goToPage = function(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  document.getElementById(`page-${page}`)?.classList.add('active');
  document.querySelector(`[data-page="${page}"]`)?.classList.add('active');

  const renders = {
    overview: renderOverview,
    trips: renderTrips,
    itinerary: renderItinerary,
    budget: renderBudget,
    packing: renderPacking,
  };
  renders[page]?.();
};

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    goToPage(link.dataset.page);
  });
});

// ==================== OVERVIEW ====================

function renderOverview() {
  renderFeatured();
  renderUpcomingActivities();
  renderWishlist();
  renderTips();

  // Stats
  const past = trips.filter(t => t.status === 'past').length;
  document.getElementById('statTrips').textContent = trips.length;
  document.getElementById('statDays').textContent =
    trips.filter(t => t.status === 'past').reduce((s, t) => {
      return s + Math.ceil((new Date(t.endDate) - new Date(t.startDate)) / 86400000);
    }, 0);
}

function renderFeatured() {
  const upcoming = trips.filter(t => t.status === 'upcoming')[0] || trips[0];
  if (!upcoming) return;

  document.getElementById('featuredBg').style.background = upcoming.gradient;
  document.getElementById('featuredTitle').textContent = upcoming.title;
  document.getElementById('featuredDesc').textContent = upcoming.desc;

  const s = new Date(upcoming.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const e = new Date(upcoming.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const days = Math.ceil((new Date(upcoming.endDate) - new Date(upcoming.startDate)) / 86400000);

  document.getElementById('featuredMeta').innerHTML = `
    <span>🗓 ${s} – ${e}</span>
    <span>👥 ${upcoming.travelers} traveler${upcoming.travelers !== 1 ? 's' : ''}</span>
    <span>💰 ${fmt(upcoming.budget)} budget</span>
    <span>📅 ${days} days</span>
  `;
}

function renderUpcomingActivities() {
  const allItems = itineraryData.flatMap(d =>
    d.items.map(i => ({ ...i, dayTitle: d.title, dayDate: d.date }))
  ).slice(0, 5);

  document.getElementById('upcomingActivities').innerHTML = allItems.map(item => {
    const color = ACTIVITY_COLORS[item.type] || '#888';
    return `<div class="activity-item">
      <div class="activity-dot" style="background:${color}"></div>
      <div class="activity-info">
        <div class="activity-name">${item.icon} ${item.name}</div>
        <div class="activity-meta">${item.dayTitle} · ${item.note}</div>
      </div>
      <div class="activity-date">${item.dayDate}</div>
    </div>`;
  }).join('');
}

function renderWishlist() {
  document.getElementById('wishlist').innerHTML = wishlist.map(w => `
    <div class="wish-item">
      <span class="wish-flag">${w.flag}</span>
      <div>
        <div class="wish-dest">${w.dest}</div>
        <div class="wish-dream">${w.dream}</div>
      </div>
      <button class="wish-del" onclick="deleteWish(${w.id})" title="Remove">✕</button>
    </div>
  `).join('');
}

window.deleteWish = function(id) {
  wishlist = wishlist.filter(w => w.id !== id);
  save();
  renderWishlist();
  showToast('Removed from wishlist');
};

document.getElementById('addWishBtn').addEventListener('click', () => {
  openModal('wish');
});

function renderTips() {
  document.getElementById('tipsStrip').innerHTML = tips.map(t => `
    <div class="tip-card">
      <div class="tip-icon">${t.icon}</div>
      <div class="tip-title">${t.title}</div>
      <div class="tip-text">${t.text}</div>
    </div>
  `).join('');
}

// ==================== TRIPS ====================

function renderTrips() {
  const filter = document.querySelector('.filter-pill.active')?.dataset.filter || 'all';
  const filtered = filter === 'all' ? trips : trips.filter(t => t.status === filter);

  document.getElementById('tripsGrid').innerHTML = filtered.map(trip => {
    const s = new Date(trip.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const e = new Date(trip.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const days = Math.ceil((new Date(trip.endDate) - new Date(trip.startDate)) / 86400000);
    const statusLabel = { upcoming: 'Upcoming', past: 'Past', planning: 'Planning' }[trip.status];

    return `<div class="trip-card" onclick="goToPage('itinerary')">
      <div class="trip-card-visual" style="background:${trip.gradient}">
        <div class="trip-card-visual-inner">
          <span class="trip-card-emoji">${trip.emoji}</span>
        </div>
        <span class="trip-status-badge status-${trip.status}">${statusLabel}</span>
      </div>
      <div class="trip-card-body">
        <div class="trip-card-title">${trip.title}</div>
        <div class="trip-card-dates">🗓 ${s} – ${e}</div>
        <div class="trip-card-stats">
          <div class="tc-stat">
            <div class="tc-stat-val">${days}</div>
            <div class="tc-stat-lbl">Days</div>
          </div>
          <div class="tc-stat">
            <div class="tc-stat-val">${trip.travelers}</div>
            <div class="tc-stat-lbl">Travelers</div>
          </div>
          <div class="tc-stat">
            <div class="tc-stat-val">${fmt(trip.budget)}</div>
            <div class="tc-stat-lbl">Budget</div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

document.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    renderTrips();
  });
});

// ==================== ITINERARY ====================

function renderItinerary() {
  document.getElementById('itineraryDays').innerHTML = itineraryData.map(day => `
    <div class="itin-day">
      <div class="itin-day-header">
        <div class="day-num">${day.day}</div>
        <div>
          <div class="day-title">${day.title}</div>
          <div class="day-date">📅 ${day.date}</div>
        </div>
      </div>
      <div class="itin-day-body">
        ${day.items.map(item => `
          <div class="itin-item">
            <div class="itin-time">${item.time}</div>
            <div class="itin-icon" style="background:${ACTIVITY_COLORS[item.type]}15">${item.icon}</div>
            <div class="itin-details">
              <div class="itin-name">${item.name}</div>
              <div class="itin-note">${item.note}</div>
            </div>
            <span class="itin-tag tag-${item.type}">${item.type}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Summary
  const totalActivities = itineraryData.reduce((s, d) => s + d.items.length, 0);
  const upcoming = trips.filter(t => t.status === 'upcoming')[0] || trips[0];
  const days = Math.ceil((new Date(upcoming.endDate) - new Date(upcoming.startDate)) / 86400000);

  document.getElementById('summaryItems').innerHTML = `
    <div class="summary-item"><label>Destination</label><span>${upcoming.title}</span></div>
    <div class="summary-item"><label>Duration</label><span>${days} days</span></div>
    <div class="summary-item"><label>Travelers</label><span>${upcoming.travelers} people</span></div>
    <div class="summary-item"><label>Activities planned</label><span>${totalActivities}</span></div>
    <div class="summary-item"><label>Budget</label><span>${fmt(upcoming.budget)}</span></div>
    <div class="summary-item"><label>Currency</label><span>JPY (¥)</span></div>
    <div class="summary-item"><label>Timezone</label><span>JST (UTC+9)</span></div>
  `;

  // Weather
  document.getElementById('weatherList').innerHTML = weatherData.map(w => `
    <div class="weather-day">
      <span class="weather-icon">${w.icon}</span>
      <span class="weather-name">${w.day}</span>
      <span class="weather-temp">${w.temp}</span>
      <span class="weather-range">${w.range}</span>
    </div>
  `).join('');
}

document.getElementById('addActivityBtn').addEventListener('click', () => openModal('activity'));

// ==================== BUDGET ====================

function renderBudget() {
  const upcoming = trips.filter(t => t.status === 'upcoming')[0] || trips[0];
  const totalBudget = upcoming?.budget || 4200;
  const totalSpent = expenses.reduce((s, e) => s + e.amount, 0);
  const pct = Math.min(100, (totalSpent / totalBudget) * 100);
  const circumference = 364;

  document.getElementById('budgetPct').textContent = pct.toFixed(0) + '%';
  document.getElementById('bnTotal').textContent = fmt(totalBudget);
  document.getElementById('bnSpent').textContent = fmtFull(totalSpent);
  document.getElementById('bnRemain').textContent = fmtFull(totalBudget - totalSpent);

  setTimeout(() => {
    const arc = document.getElementById('budgetArc');
    if (arc) arc.style.strokeDashoffset = circumference - (pct / 100) * circumference;
  }, 100);

  // Category breakdown
  const byCat = {};
  expenses.forEach(e => { byCat[e.category] = (byCat[e.category] || 0) + e.amount; });
  const maxCat = Math.max(...Object.values(byCat), 1);

  document.getElementById('catBreakdown').innerHTML = Object.entries(byCat)
    .sort((a, b) => b[1] - a[1])
    .map(([cat, amt]) => `
      <div class="cat-item">
        <div class="cat-row">
          <div class="cat-name"><span class="cat-icon">${CAT_ICONS[cat] || '📌'}</span> ${cat}</div>
          <div class="cat-amount">${fmtFull(amt)}</div>
        </div>
        <div class="cat-track">
          <div class="cat-fill" style="width:${(amt/maxCat)*100}%;background:${CAT_COLORS[cat] || '#888'}"></div>
        </div>
      </div>
    `).join('');

  renderExpenseList();
}

function renderExpenseList() {
  const catFilter = document.getElementById('expCatFilter')?.value || 'all';
  const filtered = catFilter === 'all' ? expenses : expenses.filter(e => e.category === catFilter);
  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  document.getElementById('expenseList').innerHTML = sorted.map(exp => {
    const date = new Date(exp.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const color = CAT_COLORS[exp.category] || '#888';
    return `<div class="expense-item">
      <div class="expense-icon" style="background:${color}15">${CAT_ICONS[exp.category] || '📌'}</div>
      <div class="expense-info">
        <div class="expense-name">${exp.name}</div>
        <div class="expense-meta">${date} · ${exp.category}</div>
      </div>
      <div class="expense-amount">${exp.amount === 0 ? 'Free' : fmtFull(exp.amount)}</div>
    </div>`;
  }).join('');
}

document.getElementById('expCatFilter')?.addEventListener('change', renderExpenseList);
document.getElementById('addExpenseBtn')?.addEventListener('click', () => openModal('expense'));

// ==================== PACKING ====================

function renderPacking() {
  const allItems = Object.values(packingList).flat();
  const packed = allItems.filter(i => i.packed).length;
  const total = allItems.length;
  const pct = total ? Math.round((packed / total) * 100) : 0;

  document.getElementById('packingPct').textContent = pct + '%';
  document.getElementById('ppFill').style.width = pct + '%';
  document.getElementById('ppCounts').textContent = `${packed} of ${total} items packed`;

  document.getElementById('packingGrid').innerHTML = Object.entries(packingList).map(([cat, items]) => {
    const catIcons = {
      'Clothing': '👕', 'Documents': '📄', 'Tech & Gadgets': '💻',
      'Toiletries': '🧴', 'Health & Safety': '💊', 'Misc': '🎒'
    };
    const packedCount = items.filter(i => i.packed).length;

    return `<div class="packing-cat-card">
      <div class="packing-cat-header">
        <span class="packing-cat-icon">${catIcons[cat] || '📦'}</span>
        <span class="packing-cat-title">${cat}</span>
        <span class="packing-cat-count">${packedCount}/${items.length}</span>
      </div>
      ${items.map(item => `
        <div class="pack-item" id="pack_${item.id}">
          <div class="pack-checkbox ${item.packed ? 'checked' : ''}" onclick="togglePack('${cat}', ${item.id})">
            ${item.packed ? '✓' : ''}
          </div>
          <span class="pack-name ${item.packed ? 'checked' : ''}">${item.name}</span>
          <button class="pack-del" onclick="deletePack('${cat}', ${item.id})" title="Remove">✕</button>
        </div>
      `).join('')}
    </div>`;
  }).join('');
}

window.togglePack = function(cat, id) {
  const item = packingList[cat]?.find(i => i.id === id);
  if (item) {
    item.packed = !item.packed;
    save();
    renderPacking();
    showToast(item.packed ? `✓ Packed: ${item.name}` : `Unpacked: ${item.name}`);
  }
};

window.deletePack = function(cat, id) {
  packingList[cat] = packingList[cat].filter(i => i.id !== id);
  save();
  renderPacking();
};

document.getElementById('addPackingBtn')?.addEventListener('click', () => openModal('packing'));
document.getElementById('addCategoryBtn')?.addEventListener('click', () => openModal('packingCat'));

// ==================== MODAL ====================

function openModal(type) {
  const overlay = document.getElementById('modalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  if (type === 'trip') {
    title.textContent = 'Plan a New Trip';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Destination</label>
        <input type="text" class="form-input" id="newTripDest" placeholder="e.g. Amalfi Coast, Italy">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Start Date</label>
          <input type="date" class="form-input" id="newTripStart">
        </div>
        <div class="form-group">
          <label class="form-label">End Date</label>
          <input type="date" class="form-input" id="newTripEnd">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Budget ($)</label>
          <input type="number" class="form-input" id="newTripBudget" placeholder="3000">
        </div>
        <div class="form-group">
          <label class="form-label">Travelers</label>
          <input type="number" class="form-input" id="newTripTravelers" placeholder="2" min="1">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Short Description</label>
        <input type="text" class="form-input" id="newTripDesc" placeholder="What are you most excited about?">
      </div>
      <div class="form-group">
        <label class="form-label">Status</label>
        <select class="form-select" id="newTripStatus">
          <option value="planning">Planning</option>
          <option value="upcoming">Upcoming (booked)</option>
        </select>
      </div>
      <button class="form-submit" onclick="saveNewTrip()">Create Trip →</button>
    `;
  }

  if (type === 'expense') {
    title.textContent = 'Add Expense';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Description</label>
        <input type="text" class="form-input" id="expName" placeholder="e.g. Temple entrance fee">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Amount ($)</label>
          <input type="number" class="form-input" id="expAmount" placeholder="0.00" step="0.01" min="0">
        </div>
        <div class="form-group">
          <label class="form-label">Date</label>
          <input type="date" class="form-input" id="expDate" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <select class="form-select" id="expCat">
          <option>Flights</option><option>Hotel</option><option selected>Food</option>
          <option>Transport</option><option>Activities</option><option>Shopping</option><option>Other</option>
        </select>
      </div>
      <button class="form-submit" onclick="saveExpense()">Add Expense →</button>
    `;
  }

  if (type === 'activity') {
    title.textContent = 'Add Activity';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Activity Name</label>
        <input type="text" class="form-input" id="actName" placeholder="e.g. Arashiyama Bamboo Grove">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Day</label>
          <select class="form-select" id="actDay">
            ${itineraryData.map(d => `<option value="${d.day}">Day ${d.day} — ${d.title}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Time</label>
          <input type="time" class="form-input" id="actTime" value="10:00">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-select" id="actType">
          <option value="sight">Sightseeing</option>
          <option value="food">Food & Dining</option>
          <option value="activity">Activity</option>
          <option value="transport">Transport</option>
          <option value="hotel">Accommodation</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <input type="text" class="form-input" id="actNote" placeholder="Tips, booking info...">
      </div>
      <button class="form-submit" onclick="saveActivity()">Add to Itinerary →</button>
    `;
  }

  if (type === 'packing') {
    title.textContent = 'Add Packing Item';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Item Name</label>
        <input type="text" class="form-input" id="packName" placeholder="e.g. Sunscreen SPF 50">
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <select class="form-select" id="packCat">
          ${Object.keys(packingList).map(c => `<option>${c}</option>`).join('')}
        </select>
      </div>
      <button class="form-submit" onclick="savePackingItem()">Add Item →</button>
    `;
  }

  if (type === 'packingCat') {
    title.textContent = 'Add Category';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Category Name</label>
        <input type="text" class="form-input" id="newCatName" placeholder="e.g. Beach Essentials">
      </div>
      <button class="form-submit" onclick="savePackingCat()">Add Category →</button>
    `;
  }

  if (type === 'wish') {
    title.textContent = 'Add to Wishlist';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Destination</label>
        <input type="text" class="form-input" id="wishDest" placeholder="e.g. Santorini, Greece">
      </div>
      <div class="form-group">
        <label class="form-label">Flag Emoji</label>
        <input type="text" class="form-input" id="wishFlag" placeholder="🇬🇷" maxlength="4">
      </div>
      <div class="form-group">
        <label class="form-label">Dream Description</label>
        <input type="text" class="form-input" id="wishDream" placeholder="What draws you there?">
      </div>
      <button class="form-submit" onclick="saveWish()">Add to Wishlist →</button>
    `;
  }

  overlay.classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

// SAVE FUNCTIONS
window.saveNewTrip = function() {
  const dest = document.getElementById('newTripDest').value.trim();
  const start = document.getElementById('newTripStart').value;
  const end = document.getElementById('newTripEnd').value;
  const budget = parseFloat(document.getElementById('newTripBudget').value) || 2000;
  const travelers = parseInt(document.getElementById('newTripTravelers').value) || 1;
  const desc = document.getElementById('newTripDesc').value.trim();
  const status = document.getElementById('newTripStatus').value;

  if (!dest || !start || !end) { showToast('Please fill destination and dates'); return; }

  const emojis = ['🌍','🗺️','🧳','🏔️','🌴','🏛️','⛵'];
  const gradients = [
    'linear-gradient(135deg,#c0603c,#a04828)',
    'linear-gradient(135deg,#4a8ec0,#2a6ea0)',
    'linear-gradient(135deg,#7a9e8a,#4a7a5a)',
    'linear-gradient(135deg,#c49a3c,#8b6820)',
  ];

  trips.push({
    id: Date.now(), title: dest, status, startDate: start, endDate: end,
    travelers, budget, desc: desc || 'An amazing adventure awaits.',
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    gradient: gradients[Math.floor(Math.random() * gradients.length)],
  });

  save();
  closeModal();
  renderTrips();
  countdownDays();
  showToast(`"${dest}" added to your trips! ✈️`);
};

window.saveExpense = function() {
  const name = document.getElementById('expName').value.trim();
  const amount = parseFloat(document.getElementById('expAmount').value) || 0;
  const date = document.getElementById('expDate').value;
  const category = document.getElementById('expCat').value;

  if (!name) { showToast('Please add a description'); return; }

  expenses.unshift({ id: Date.now(), name, category, amount, date });
  save();
  closeModal();
  renderBudget();
  showToast('Expense added ✓');
};

window.saveActivity = function() {
  const name = document.getElementById('actName').value.trim();
  const dayIdx = parseInt(document.getElementById('actDay').value) - 1;
  const time = document.getElementById('actTime').value;
  const type = document.getElementById('actType').value;
  const note = document.getElementById('actNote').value.trim();

  if (!name) { showToast('Please enter an activity name'); return; }

  const icons = { sight: '👁️', food: '🍽️', activity: '⚡', transport: '🚌', hotel: '🏨' };
  itineraryData[dayIdx].items.push({ time, icon: icons[type] || '📍', name, note, type });

  closeModal();
  renderItinerary();
  showToast(`Added to Day ${dayIdx + 1} ✓`);
};

window.savePackingItem = function() {
  const name = document.getElementById('packName').value.trim();
  const cat = document.getElementById('packCat').value;

  if (!name) { showToast('Please enter an item name'); return; }

  if (!packingList[cat]) packingList[cat] = [];
  packingList[cat].push({ id: Date.now(), name, packed: false });
  save();
  closeModal();
  renderPacking();
  showToast(`"${name}" added to ${cat} ✓`);
};

window.savePackingCat = function() {
  const name = document.getElementById('newCatName').value.trim();
  if (!name) { showToast('Please enter a category name'); return; }
  if (packingList[name]) { showToast('Category already exists'); return; }
  packingList[name] = [];
  save();
  closeModal();
  renderPacking();
  showToast(`Category "${name}" created ✓`);
};

window.saveWish = function() {
  const dest = document.getElementById('wishDest').value.trim();
  const flag = document.getElementById('wishFlag').value.trim() || '🌍';
  const dream = document.getElementById('wishDream').value.trim();
  if (!dest) { showToast('Please enter a destination'); return; }
  wishlist.push({ id: Date.now(), dest, flag, dream: dream || 'Dream destination' });
  save();
  closeModal();
  renderWishlist();
  showToast(`"${dest}" added to wishlist ✓`);
};

// Modal events
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

// New trip buttons
document.getElementById('newTripBtn')?.addEventListener('click', () => openModal('trip'));
document.getElementById('newTripBtn2')?.addEventListener('click', () => openModal('trip'));

// ==================== INIT ====================
countdownDays();
renderOverview();
