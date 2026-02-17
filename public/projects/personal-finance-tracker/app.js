// ===== DATA =====
const COLORS = ['#c8a96e','#4ade80','#f87171','#60a5fa','#a78bfa','#fb923c','#34d399','#f472b6'];
const CAT_ICONS = {
  Food: '🍔', Transport: '🚗', Housing: '🏠', Entertainment: '🎬',
  Shopping: '🛍️', Health: '💊', Salary: '💼', Freelance: '💻',
  Investment: '📈', Utilities: '💡', Education: '📚', Other: '📌'
};

let transactions = JSON.parse(localStorage.getItem('vault_tx')) || [
  { id: 1, name: 'Monthly Salary', type: 'income', amount: 5000, category: 'Salary', date: '2026-02-01' },
  { id: 2, name: 'Freelance Project', type: 'income', amount: 1400, category: 'Freelance', date: '2026-02-05' },
  { id: 3, name: 'Apartment Rent', type: 'expense', amount: 1200, category: 'Housing', date: '2026-02-03' },
  { id: 4, name: 'Grocery Shopping', type: 'expense', amount: 320, category: 'Food', date: '2026-02-06' },
  { id: 5, name: 'Netflix & Spotify', type: 'expense', amount: 28, category: 'Entertainment', date: '2026-02-07' },
  { id: 6, name: 'Uber Rides', type: 'expense', amount: 85, category: 'Transport', date: '2026-02-09' },
  { id: 7, name: 'Gym Membership', type: 'expense', amount: 55, category: 'Health', date: '2026-02-10' },
  { id: 8, name: 'Amazon Order', type: 'expense', amount: 142, category: 'Shopping', date: '2026-02-11' },
  { id: 9, name: 'Restaurant Dinner', type: 'expense', amount: 95, category: 'Food', date: '2026-02-13' },
  { id: 10, name: 'Electric Bill', type: 'expense', amount: 90, category: 'Utilities', date: '2026-02-14' },
  { id: 11, name: 'Online Course', type: 'expense', amount: 79, category: 'Education', date: '2026-02-14' },
  { id: 12, name: 'Bus Pass', type: 'expense', amount: 45, category: 'Transport', date: '2026-02-15' },
];

let budgets = JSON.parse(localStorage.getItem('vault_budgets')) || [
  { category: 'Food', limit: 500, color: COLORS[0] },
  { category: 'Transport', limit: 200, color: COLORS[4] },
  { category: 'Housing', limit: 1500, color: COLORS[3] },
  { category: 'Entertainment', limit: 100, color: COLORS[7] },
  { category: 'Shopping', limit: 300, color: COLORS[5] },
  { category: 'Health', limit: 150, color: COLORS[2] },
];

// ===== UTILS =====
const save = () => {
  localStorage.setItem('vault_tx', JSON.stringify(transactions));
  localStorage.setItem('vault_budgets', JSON.stringify(budgets));
};

const fmt = (n) => '$' + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2 });

const totalIncome = () => transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
const totalExpense = () => transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

const spendByCategory = () => {
  const m = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    m[t.category] = (m[t.category] || 0) + t.amount;
  });
  return m;
};

const showToast = (msg) => {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
};

// ===== NAVIGATION =====
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const sec = item.dataset.section;
    switchSection(sec);
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
  });
});

document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const target = el.dataset.goto;
    switchSection(target);
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.section === target);
    });
  });
});

function switchSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(name)?.classList.add('active');
  if (name === 'dashboard') renderDashboard();
  if (name === 'transactions') renderAllTx();
  if (name === 'budget') renderBudget();
  if (name === 'analytics') renderAnalytics();
}

// ===== DASHBOARD =====
function renderDashboard() {
  const income = totalIncome();
  const expense = totalExpense();
  const balance = 18180 + income - expense; // base balance

  document.getElementById('totalBalance').textContent = fmt(balance);
  document.getElementById('totalIncome').textContent = fmt(income);
  document.getElementById('totalExpense').textContent = fmt(expense);

  renderRecentTx();
  renderBarChart();
  renderDonutChart();
}

function renderRecentTx(limit = 5) {
  const el = document.getElementById('recentTxList');
  const recent = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
  el.innerHTML = recent.map(tx => txHTML(tx)).join('');
}

function renderAllTx() {
  const search = document.getElementById('txSearch').value.toLowerCase();
  const typeF = document.getElementById('txFilter').value;
  const catF = document.getElementById('catFilter').value;

  let filtered = [...transactions]
    .filter(t => t.name.toLowerCase().includes(search))
    .filter(t => typeF === 'all' || t.type === typeF)
    .filter(t => catF === 'all' || t.category === catF)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  document.getElementById('allTxList').innerHTML = filtered.length
    ? filtered.map(tx => txHTML(tx, true)).join('')
    : '<div style="text-align:center;padding:2rem;color:var(--text-muted)">No transactions found</div>';
}

function txHTML(tx, showDelete = false) {
  const icon = CAT_ICONS[tx.category] || '💰';
  const bg = tx.type === 'income' ? 'rgba(74,222,128,0.12)' : 'rgba(248,113,113,0.12)';
  const date = new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return `<div class="tx-item" data-id="${tx.id}">
    <div class="tx-icon" style="background:${bg}">${icon}</div>
    <div class="tx-info">
      <div class="tx-name">${tx.name}</div>
      <div class="tx-meta">${date} &nbsp; <span class="tx-cat">${tx.category}</span></div>
    </div>
    <div class="tx-amount ${tx.type}">
      ${tx.type === 'income' ? '+' : '-'}${fmt(tx.amount)}
    </div>
    ${showDelete ? `<button onclick="deleteTx(${tx.id})" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:0.9rem;margin-left:0.5rem" title="Delete">✕</button>` : ''}
  </div>`;
}

window.deleteTx = function(id) {
  transactions = transactions.filter(t => t.id !== id);
  save();
  renderAllTx();
  showToast('Transaction deleted');
};

['txSearch', 'txFilter', 'catFilter'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', renderAllTx);
  document.getElementById(id)?.addEventListener('change', renderAllTx);
});

// ===== BUDGET =====
function renderBudget() {
  const cats = spendByCategory();
  document.getElementById('budgetList').innerHTML = budgets.map(b => {
    const spent = cats[b.category] || 0;
    const pct = Math.min(100, (spent / b.limit) * 100);
    const color = pct >= 90 ? '#f87171' : pct >= 70 ? '#fb923c' : b.color;

    return `<div class="budget-card">
      <div class="budget-header">
        <div class="budget-cat">
          <span>${CAT_ICONS[b.category] || '📌'}</span>
          <span>${b.category}</span>
        </div>
        <div class="budget-amounts">
          <div class="budget-spent">${fmt(spent)}</div>
          <div class="budget-limit">of ${fmt(b.limit)}</div>
        </div>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${pct}%;background:${color}"></div>
      </div>
      <div class="budget-pct">${pct.toFixed(0)}% used · ${fmt(Math.max(0, b.limit - spent))} remaining</div>
    </div>`;
  }).join('');
}

// ===== CHARTS =====
let barChartInst, donutInst, lineInst, weeklyInst;

function renderBarChart() {
  const ctx = document.getElementById('barChart').getContext('2d');
  const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
  const incomeData = [4200, 4800, 5100, 5600, 5900, totalIncome()];
  const expData = [2800, 3100, 2900, 3400, 3100, totalExpense()];

  if (barChartInst) barChartInst.destroy();
  barChartInst = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        { label: 'Income', data: incomeData, backgroundColor: 'rgba(74,222,128,0.7)', borderRadius: 6 },
        { label: 'Expenses', data: expData, backgroundColor: 'rgba(248,113,113,0.7)', borderRadius: 6 },
      ]
    },
    options: chartDefaults()
  });
}

function renderDonutChart() {
  const ctx = document.getElementById('donutChart').getContext('2d');
  const cats = spendByCategory();
  const labels = Object.keys(cats);
  const vals = Object.values(cats);
  const colors = labels.map((_, i) => COLORS[i % COLORS.length]);

  if (donutInst) donutInst.destroy();
  donutInst = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data: vals, backgroundColor: colors, borderWidth: 0, hoverOffset: 8 }] },
    options: {
      responsive: true,
      cutout: '72%',
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${fmt(ctx.raw)}` } } }
    }
  });

  const leg = document.getElementById('legend');
  leg.innerHTML = labels.map((l, i) =>
    `<div class="legend-item"><div class="legend-dot" style="background:${colors[i]}"></div>${l}</div>`
  ).join('');
}

function renderAnalytics() {
  renderLineChart();
  renderWeeklyChart();
  renderTopCategories();
}

function renderLineChart() {
  const ctx = document.getElementById('lineChart').getContext('2d');
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
  const data = [2400, 2800, 3100, 2900, 3400, 3100, totalExpense()];

  if (lineInst) lineInst.destroy();
  lineInst = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Expenses',
        data,
        borderColor: '#c8a96e',
        backgroundColor: 'rgba(200,169,110,0.08)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#c8a96e',
        pointRadius: 4,
      }]
    },
    options: chartDefaults()
  });
}

function renderWeeklyChart() {
  const ctx = document.getElementById('weeklyChart').getContext('2d');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const data = [180, 95, 240, 60, 320, 410, 145];

  if (weeklyInst) weeklyInst.destroy();
  weeklyInst = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: days,
      datasets: [{
        label: 'Daily Spend',
        data,
        backgroundColor: data.map((_, i) => i === 4 ? '#c8a96e' : 'rgba(200,169,110,0.3)'),
        borderRadius: 8,
      }]
    },
    options: { ...chartDefaults(), scales: { ...chartDefaults().scales, x: { ...chartDefaults().scales.x } } }
  });
}

function renderTopCategories() {
  const cats = spendByCategory();
  const sorted = Object.entries(cats).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const max = sorted[0]?.[1] || 1;

  document.getElementById('topCategories').innerHTML = sorted.map(([cat, amt], i) => `
    <div class="top-cat-item">
      <div class="top-cat-label">${CAT_ICONS[cat] || '📌'} ${cat}</div>
      <div class="top-cat-bar-track">
        <div class="top-cat-bar" style="width:${(amt/max)*100}%;background:${COLORS[i % COLORS.length]}"></div>
      </div>
      <div class="top-cat-val">${fmt(amt)}</div>
    </div>
  `).join('');
}

function chartDefaults() {
  return {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#9a9ab0', font: { family: 'DM Sans', size: 12 }, boxWidth: 12 } },
      tooltip: { backgroundColor: '#1a1a26', titleColor: '#f0f0f5', bodyColor: '#9a9ab0', borderColor: 'rgba(255,255,255,0.07)', borderWidth: 1 }
    },
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b6b85', font: { family: 'DM Sans' } } },
      y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b6b85', font: { family: 'DM Sans' }, callback: v => '$' + v.toLocaleString() } }
    }
  };
}

// ===== MODAL =====
function openModal(type) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');
  const title = document.getElementById('modalTitle');

  if (type === 'transaction') {
    title.textContent = 'Add Transaction';
    body.innerHTML = `
      <div class="type-toggle">
        <button class="type-btn active-expense" id="typeExpenseBtn" onclick="setType('expense')">− Expense</button>
        <button class="type-btn" id="typeIncomeBtn" onclick="setType('income')">+ Income</button>
      </div>
      <input type="hidden" id="txType" value="expense">
      <div class="form-group">
        <label class="form-label">Description</label>
        <input type="text" class="form-input" id="txNameInp" placeholder="e.g. Grocery Shopping">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Amount ($)</label>
          <input type="number" class="form-input" id="txAmtInp" placeholder="0.00" step="0.01" min="0">
        </div>
        <div class="form-group">
          <label class="form-label">Date</label>
          <input type="date" class="form-input" id="txDateInp" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <select class="form-input form-select" id="txCatInp">
          <option>Food</option><option>Transport</option><option>Housing</option>
          <option>Entertainment</option><option>Shopping</option><option>Health</option>
          <option>Utilities</option><option>Education</option><option>Salary</option>
          <option>Freelance</option><option>Investment</option><option>Other</option>
        </select>
      </div>
      <button class="form-submit" onclick="submitTransaction()">Add Transaction</button>
    `;
  }

  if (type === 'budget') {
    title.textContent = 'Set Budget Limit';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Category</label>
        <select class="form-input form-select" id="budgetCat">
          <option>Food</option><option>Transport</option><option>Housing</option>
          <option>Entertainment</option><option>Shopping</option><option>Health</option>
          <option>Utilities</option><option>Education</option><option>Other</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Monthly Limit ($)</label>
        <input type="number" class="form-input" id="budgetLimit" placeholder="500" min="1">
      </div>
      <button class="form-submit" onclick="submitBudget()">Save Budget</button>
    `;
  }

  overlay.classList.add('open');
}

window.setType = function(type) {
  document.getElementById('txType').value = type;
  document.getElementById('typeExpenseBtn').className = 'type-btn' + (type === 'expense' ? ' active-expense' : '');
  document.getElementById('typeIncomeBtn').className = 'type-btn' + (type === 'income' ? ' active-income' : '');
};

window.submitTransaction = function() {
  const name = document.getElementById('txNameInp').value.trim();
  const amount = parseFloat(document.getElementById('txAmtInp').value);
  const date = document.getElementById('txDateInp').value;
  const category = document.getElementById('txCatInp').value;
  const type = document.getElementById('txType').value;

  if (!name || !amount || !date) { showToast('Please fill all fields'); return; }

  transactions.unshift({ id: Date.now(), name, type, amount, category, date });
  save();
  closeModal();
  renderDashboard();
  showToast('Transaction added! ✨');
};

window.submitBudget = function() {
  const category = document.getElementById('budgetCat').value;
  const limit = parseFloat(document.getElementById('budgetLimit').value);
  if (!limit) { showToast('Please enter a valid amount'); return; }

  const existing = budgets.findIndex(b => b.category === category);
  if (existing >= 0) budgets[existing].limit = limit;
  else budgets.push({ category, limit, color: COLORS[budgets.length % COLORS.length] });

  save();
  closeModal();
  renderBudget();
  showToast('Budget updated! ✨');
};

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

document.getElementById('addTransactionBtn').addEventListener('click', () => openModal('transaction'));
document.getElementById('addTransactionBtn2').addEventListener('click', () => openModal('transaction'));
document.getElementById('addBudgetBtn').addEventListener('click', () => openModal('budget'));

// ===== INIT =====
renderDashboard();
