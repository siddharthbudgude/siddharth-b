// ===== DATA =====
const WORKOUT_ICONS = {
  'Strength Training': '🏋️', 'Cardio': '🏃', 'HIIT': '⚡', 'Yoga': '🧘',
  'Cycling': '🚴', 'Swimming': '🏊', 'Running': '🏃', 'CrossFit': '💪'
};

const WORKOUT_COLORS = {
  'Strength Training': '#00b4ff', 'Cardio': '#00e5a0', 'HIIT': '#ff6b35',
  'Yoga': '#a855f7', 'Cycling': '#f59e0b', 'Swimming': '#06b6d4',
  'Running': '#00e5a0', 'CrossFit': '#ef4444'
};

let workouts = JSON.parse(localStorage.getItem('pulse_workouts')) || [
  { id: 1, type: 'Strength Training', duration: 50, calories: 380, intensity: 'Moderate', date: '2026-02-17', notes: 'Great session!', exercises: [{ name: 'Bench Press', sets: 4, reps: 10, weight: 185 }, { name: 'Squats', sets: 4, reps: 8, weight: 225 }, { name: 'Pull-ups', sets: 3, reps: 12, weight: 0 }] },
  { id: 2, type: 'Running', duration: 35, calories: 320, intensity: 'Moderate', date: '2026-02-15', notes: '5k in 28 min', exercises: [] },
  { id: 3, type: 'HIIT', duration: 25, calories: 280, intensity: 'Intense', date: '2026-02-14', notes: 'Brutal but worth it', exercises: [{ name: 'Burpees', sets: 5, reps: 15, weight: 0 }, { name: 'Mountain Climbers', sets: 4, reps: 20, weight: 0 }] },
  { id: 4, type: 'Yoga', duration: 60, calories: 180, intensity: 'Light', date: '2026-02-13', notes: 'Recovery day', exercises: [] },
  { id: 5, type: 'Cycling', duration: 45, calories: 420, intensity: 'Intense', date: '2026-02-12', notes: 'Hill intervals', exercises: [] },
  { id: 6, type: 'Strength Training', duration: 55, calories: 410, intensity: 'Intense', date: '2026-02-10', notes: 'PR on deadlift!', exercises: [{ name: 'Deadlift', sets: 3, reps: 5, weight: 315 }, { name: 'OHP', sets: 4, reps: 8, weight: 135 }] },
];

let goals = JSON.parse(localStorage.getItem('pulse_goals')) || [
  { id: 1, title: 'Run 100km this month', target: 100, current: 42, unit: 'km', category: 'Cardio', color: '#00e5a0' },
  { id: 2, title: 'Bench Press 225 lbs', target: 225, current: 185, unit: 'lbs', category: 'Strength', color: '#00b4ff' },
  { id: 3, title: 'Complete 20 workouts', target: 20, current: 6, unit: 'sessions', category: 'General', color: '#a855f7' },
  { id: 4, title: 'Lose 10 pounds', target: 10, current: 4, unit: 'lbs', category: 'Weight', color: '#ff6b35' },
];

let dailyData = JSON.parse(localStorage.getItem('pulse_daily')) || {
  calories: 0, steps: 7842, activeTime: 0, water: 0
};

const personalBests = [
  { event: 'Bench Press', val: '185', unit: 'lbs', date: 'Feb 17' },
  { event: '5K Run', val: '28:12', unit: 'min', date: 'Feb 15' },
  { event: 'Deadlift', val: '315', unit: 'lbs', date: 'Feb 10' },
  { event: 'Plank Hold', val: '3:45', unit: 'min', date: 'Feb 8' },
];

const todayPlan = [
  { name: 'Morning Run', sub: '5km · 6:00 AM', badge: 'badge-cardio', label: 'Cardio' },
  { name: 'Strength Training', sub: 'Upper Body · 5:00 PM', badge: 'badge-strength', label: 'Strength' },
  { name: 'Stretch & Recovery', sub: '15 min · Post workout', badge: 'badge-rest', label: 'Recovery' },
];

const workoutTemplates = [
  { icon: '🏋️', name: 'Push Day', meta: '45-60 min · Moderate', type: 'Strength Training', duration: 50, calories: 350 },
  { icon: '🦵', name: 'Pull Day', meta: '45-60 min · Moderate', type: 'Strength Training', duration: 50, calories: 360 },
  { icon: '🏃', name: '5K Run', meta: '25-35 min · Moderate', type: 'Running', duration: 30, calories: 280 },
  { icon: '⚡', name: 'HIIT Blast', meta: '20-25 min · Intense', type: 'HIIT', duration: 22, calories: 280 },
  { icon: '🧘', name: 'Yoga Flow', meta: '45-60 min · Light', type: 'Yoga', duration: 55, calories: 160 },
  { icon: '🚴', name: 'Bike Ride', meta: '40-50 min · Moderate', type: 'Cycling', duration: 45, calories: 380 },
];

// ===== UTILS =====
const save = () => {
  localStorage.setItem('pulse_workouts', JSON.stringify(workouts));
  localStorage.setItem('pulse_goals', JSON.stringify(goals));
  localStorage.setItem('pulse_daily', JSON.stringify(dailyData));
};

const fmt = (n) => n.toLocaleString();

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== NAVIGATION =====
window.showTab = function(tab) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  document.getElementById(`tab-${tab}`)?.classList.add('active');
  const idx = ['dashboard','workout','goals','history'].indexOf(tab);
  document.querySelectorAll('.tab')[idx]?.classList.add('active');

  if (tab === 'dashboard') renderDashboard();
  if (tab === 'workout') renderWorkoutTab();
  if (tab === 'goals') renderGoals();
  if (tab === 'history') renderHistory();
};

// ===== DASHBOARD =====
function renderDashboard() {
  // Recalculate from today's workouts
  const todayWorkouts = workouts.filter(w => w.date === new Date().toISOString().split('T')[0]);
  dailyData.calories = todayWorkouts.reduce((s, w) => s + w.calories, 0);
  dailyData.activeTime = todayWorkouts.reduce((s, w) => s + w.duration, 0);
  save();

  animateRing('calRing', dailyData.calories, 500, 'calVal', 'calGoal', 'Goal: 500 kcal');
  animateRing('stepsRing', dailyData.steps, 10000, 'stepsVal', 'stepsGoal', 'Goal: 10,000', true);
  animateRing('timeRing', dailyData.activeTime, 60, 'timeVal', 'timeGoal', 'Goal: 60 min');
  animateRing('waterRing', dailyData.water, 3, 'waterVal', null, null, false, 1);

  renderTodayPlan();
  renderWaterCups();
  renderRecentWorkouts();
  renderPBs();
  renderWeeklyChart();
}

function animateRing(ringId, val, max, valId, goalId, goalText, isSteps = false, decimals = 0) {
  const el = document.getElementById(valId);
  const ring = document.getElementById(ringId);
  const pct = Math.min(1, val / max);
  const circumference = 239;

  if (ring) {
    setTimeout(() => {
      ring.style.strokeDashoffset = circumference - (pct * circumference);
    }, 100);
  }

  // Animate value
  let start = 0;
  const target = val;
  const dur = 800;
  const startTime = performance.now();
  const tick = (now) => {
    const progress = Math.min(1, (now - startTime) / dur);
    const current = start + (target - start) * progress;
    if (el) el.textContent = decimals > 0 ? current.toFixed(1) : Math.round(current).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function renderTodayPlan() {
  document.getElementById('todayPlan').innerHTML = todayPlan.map((item, i) => `
    <div class="plan-item">
      <div class="plan-checkbox ${i === 0 ? 'checked' : ''}" onclick="togglePlan(this)">
        ${i === 0 ? '✓' : ''}
      </div>
      <div class="plan-info">
        <div class="plan-name" style="${i === 0 ? 'text-decoration:line-through;opacity:0.5' : ''}">${item.name}</div>
        <div class="plan-sub">${item.sub}</div>
      </div>
      <span class="plan-badge ${item.badge}">${item.label}</span>
    </div>
  `).join('');
}

window.togglePlan = function(el) {
  const isChecked = el.classList.contains('checked');
  el.classList.toggle('checked', !isChecked);
  el.textContent = isChecked ? '' : '✓';
  const nameEl = el.nextElementSibling?.querySelector('.plan-name');
  if (nameEl) nameEl.style.textDecoration = isChecked ? '' : 'line-through';
  if (nameEl) nameEl.style.opacity = isChecked ? '' : '0.5';
};

function renderWaterCups() {
  const total = 12;
  const filled = Math.round((dailyData.water / 3) * total);
  document.getElementById('waterCups').innerHTML = Array.from({ length: total }, (_, i) =>
    `<div class="cup ${i < filled ? 'filled' : ''}" onclick="addWater(0.25)"></div>`
  ).join('');
  document.getElementById('waterDisplay').textContent = `${dailyData.water.toFixed(1)} / 3.0 L`;
}

window.addWater = function(amount) {
  dailyData.water = Math.min(3, dailyData.water + amount);
  save();
  animateRing('waterRing', dailyData.water, 3, 'waterVal', null, null, false, 1);
  renderWaterCups();
  showToast(`💧 +${amount * 1000}ml added`);
};

window.resetWater = function() {
  dailyData.water = 0;
  save();
  animateRing('waterRing', 0, 3, 'waterVal', null, null, false, 1);
  renderWaterCups();
};

function renderRecentWorkouts(limit = 4) {
  const recent = [...workouts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
  document.getElementById('recentWorkouts').innerHTML = recent.map(w => workoutItemHTML(w)).join('');
}

function workoutItemHTML(w) {
  const date = new Date(w.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const color = WORKOUT_COLORS[w.type] || '#00e5a0';
  const icon = WORKOUT_ICONS[w.type] || '💪';
  const intClass = { Light: 'int-light', Moderate: 'int-moderate', Intense: 'int-intense', Maximum: 'int-maximum' }[w.intensity] || 'int-moderate';

  return `<div class="workout-item">
    <div class="workout-icon" style="background:${color}20">${icon}</div>
    <div class="workout-info">
      <div class="workout-name">${w.type}</div>
      <div class="workout-meta">
        <span>${date}</span>
        <span>${w.duration} min</span>
        <span class="intensity-badge ${intClass}">${w.intensity}</span>
      </div>
    </div>
    <div class="workout-stats">
      <div class="workout-cal">${w.calories} kcal</div>
      <div class="workout-dur">${w.duration} min</div>
    </div>
  </div>`;
}

function renderPBs() {
  document.getElementById('pbGrid').innerHTML = personalBests.map(pb => `
    <div class="pb-item">
      <div class="pb-trophy">🏆</div>
      <div class="pb-event">${pb.event}</div>
      <div class="pb-val">${pb.val}</div>
      <div class="pb-unit">${pb.unit}</div>
      <div class="pb-date">Set ${pb.date}</div>
    </div>
  `).join('');
}

// ===== WEEKLY CHART =====
let weeklyChartInst;
function renderWeeklyChart() {
  const ctx = document.getElementById('weeklyChart')?.getContext('2d');
  if (!ctx) return;

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const cals = [320, 0, 280, 410, 180, 420, 380];
  const dur = [35, 0, 25, 55, 60, 45, 50];

  if (weeklyChartInst) weeklyChartInst.destroy();
  weeklyChartInst = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: days,
      datasets: [
        { label: 'Calories', data: cals, backgroundColor: 'rgba(255,107,53,0.7)', borderRadius: 6, yAxisID: 'y' },
        { label: 'Duration (min)', data: dur, backgroundColor: 'rgba(0,180,255,0.7)', borderRadius: 6, yAxisID: 'y1' }
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { labels: { color: '#777', font: { family: 'Syne', size: 12 }, boxWidth: 10 } },
        tooltip: { backgroundColor: '#202020', titleColor: '#f5f5f5', bodyColor: '#aaa', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1 }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#555', font: { family: 'Syne' } } },
        y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#555', font: { family: 'JetBrains Mono' }, callback: v => v + ' kcal' }, position: 'left' },
        y1: { grid: { display: false }, ticks: { color: '#555', font: { family: 'JetBrains Mono' }, callback: v => v + 'm' }, position: 'right' }
      }
    }
  });
}

// ===== WORKOUT TAB =====
function renderWorkoutTab() {
  document.getElementById('templateGrid').innerHTML = workoutTemplates.map((t, i) => `
    <div class="template-card" onclick="loadTemplate(${i})">
      <div class="tmpl-icon">${t.icon}</div>
      <div class="tmpl-name">${t.name}</div>
      <div class="tmpl-meta">${t.meta}</div>
    </div>
  `).join('');

  if (document.getElementById('exerciseRows').innerHTML === '') {
    addExerciseRow();
  }
}

window.loadTemplate = function(idx) {
  const t = workoutTemplates[idx];
  document.getElementById('wType').value = t.type;
  document.getElementById('wDuration').value = t.duration;
  document.getElementById('wCalories').value = t.calories;
  showToast(`"${t.name}" template loaded ✓`);
};

let exCount = 0;
window.addExerciseRow = function() {
  exCount++;
  const id = `ex_${exCount}`;
  const row = document.createElement('div');
  row.className = 'exercise-row';
  row.id = id;
  row.innerHTML = `
    <input type="text" class="form-inp" placeholder="Exercise name" style="font-size:0.8rem;padding:0.6rem 0.75rem">
    <input type="number" class="form-inp" placeholder="Sets" min="1" style="font-size:0.8rem;padding:0.6rem 0.75rem">
    <input type="number" class="form-inp" placeholder="Reps" min="1" style="font-size:0.8rem;padding:0.6rem 0.75rem">
    <input type="number" class="form-inp" placeholder="Weight" min="0" style="font-size:0.8rem;padding:0.6rem 0.75rem">
    <button class="ex-del" onclick="document.getElementById('${id}').remove()">✕</button>
  `;
  document.getElementById('exerciseRows').appendChild(row);
};

window.logWorkout = function() {
  const type = document.getElementById('wType').value;
  const duration = parseInt(document.getElementById('wDuration').value);
  const calories = parseInt(document.getElementById('wCalories').value);
  const intensity = document.getElementById('wIntensity').value;
  const notes = document.getElementById('wNotes').value;

  if (!duration || !calories) { showToast('Please fill duration and calories'); return; }

  // Gather exercises
  const exercises = [];
  document.querySelectorAll('.exercise-row').forEach(row => {
    const inputs = row.querySelectorAll('input');
    if (inputs[0].value) {
      exercises.push({
        name: inputs[0].value,
        sets: parseInt(inputs[1].value) || 0,
        reps: parseInt(inputs[2].value) || 0,
        weight: parseInt(inputs[3].value) || 0,
      });
    }
  });

  const workout = {
    id: Date.now(),
    type, duration, calories, intensity, notes,
    date: new Date().toISOString().split('T')[0],
    exercises
  };

  workouts.unshift(workout);
  save();

  // Reset form
  document.getElementById('wDuration').value = '';
  document.getElementById('wCalories').value = '';
  document.getElementById('wNotes').value = '';
  document.getElementById('exerciseRows').innerHTML = '';
  exCount = 0;
  addExerciseRow();

  showToast('Workout logged! 💪');
  setTimeout(() => showTab('dashboard'), 500);
};

// ===== GOALS =====
function renderGoals() {
  const container = document.getElementById('goalsGrid');
  if (goals.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)">
      <div style="font-size:2.5rem;margin-bottom:1rem">🎯</div>
      <h3 style="color:var(--text);margin-bottom:0.5rem">No goals set yet</h3>
      <p>Create your first fitness goal to start tracking progress</p>
    </div>`;
    return;
  }

  container.innerHTML = goals.map(g => {
    const pct = Math.min(100, (g.current / g.target) * 100);
    const done = pct >= 100;
    return `<div class="goal-card">
      <div class="goal-header">
        <div>
          <div class="goal-title">${done ? '✅ ' : ''}${g.title}</div>
        </div>
        <span class="goal-cat-badge">${g.category}</span>
      </div>
      <div class="goal-progress-text">
        <span>Progress</span>
        <span class="goal-progress-val">${g.current} / ${g.target} ${g.unit}</span>
      </div>
      <div class="goal-track">
        <div class="goal-fill" style="width:${pct}%;background:${g.color}"></div>
      </div>
      <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:0.75rem">${pct.toFixed(0)}% complete</div>
      <div class="goal-actions">
        <button class="goal-update-btn" onclick="updateGoal(${g.id})">+ Update Progress</button>
        <button class="goal-del-btn" onclick="deleteGoal(${g.id})">Remove</button>
      </div>
    </div>`;
  }).join('');
}

window.updateGoal = function(id) {
  const goal = goals.find(g => g.id === id);
  if (!goal) return;
  const val = prompt(`Update progress for "${goal.title}"\nCurrent: ${goal.current} ${goal.unit}\nEnter new value:`);
  if (val !== null && !isNaN(val)) {
    goal.current = parseFloat(val);
    save();
    renderGoals();
    showToast('Goal updated! 🎯');
  }
};

window.deleteGoal = function(id) {
  goals = goals.filter(g => g.id !== id);
  save();
  renderGoals();
};

window.openGoalModal = function() { document.getElementById('goalOverlay').classList.add('open'); };
window.closeGoalModal = function() { document.getElementById('goalOverlay').classList.remove('open'); };

window.saveGoal = function() {
  const title = document.getElementById('goalTitle').value.trim();
  const target = parseFloat(document.getElementById('goalTarget').value);
  const current = parseFloat(document.getElementById('goalCurrent').value) || 0;
  const unit = document.getElementById('goalUnit').value.trim();
  const category = document.getElementById('goalCat').value;

  if (!title || !target || !unit) { showToast('Please fill all required fields'); return; }

  const colors = ['#00e5a0', '#00b4ff', '#ff6b35', '#a855f7', '#f59e0b', '#ef4444'];
  goals.push({ id: Date.now(), title, target, current, unit, category, color: colors[goals.length % colors.length] });
  save();
  closeGoalModal();
  renderGoals();

  // Reset form
  ['goalTitle','goalTarget','goalCurrent','goalUnit'].forEach(id => document.getElementById(id).value = '');
  showToast('Goal created! 🎯');
};

// ===== HISTORY =====
window.renderHistory = function() {
  const query = document.getElementById('histSearch')?.value.toLowerCase() || '';
  const typeF = document.getElementById('histType')?.value || 'all';

  const filtered = workouts.filter(w => {
    const matchT = typeF === 'all' || w.type === typeF;
    const matchQ = !query || w.type.toLowerCase().includes(query) || (w.notes || '').toLowerCase().includes(query);
    return matchT && matchQ;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  const container = document.getElementById('historyList');
  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--text-muted)">No workouts found</div>`;
    return;
  }

  container.innerHTML = filtered.map(w => {
    const date = new Date(w.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    const color = WORKOUT_COLORS[w.type] || '#00e5a0';
    const icon = WORKOUT_ICONS[w.type] || '💪';
    const intClass = { Light: 'int-light', Moderate: 'int-moderate', Intense: 'int-intense', Maximum: 'int-maximum' }[w.intensity];

    return `<div class="history-card">
      <div class="hist-header">
        <div>
          <div class="hist-title" style="display:flex;align-items:center;gap:0.5rem">
            <span style="background:${color}20;padding:0.3rem 0.5rem;border-radius:8px">${icon}</span>
            ${w.type}
            <span class="intensity-badge ${intClass}" style="margin-left:0.25rem">${w.intensity}</span>
          </div>
          <div class="hist-date">${date}${w.notes ? ` · "${w.notes}"` : ''}</div>
        </div>
        <div class="hist-stats">
          <div class="hist-stat">
            <label>Duration</label>
            <span>${w.duration} min</span>
          </div>
          <div class="hist-stat">
            <label>Calories</label>
            <span style="color:var(--calories-c)">${w.calories} kcal</span>
          </div>
        </div>
      </div>
      ${w.exercises?.length ? `<div class="hist-exercises">
        <strong style="color:var(--text-mid)">Exercises:</strong>
        ${w.exercises.map(e => `<span class="ex-tag">${e.name}${e.sets ? ` ${e.sets}×${e.reps}` : ''}${e.weight ? ` @${e.weight}lbs` : ''}</span>`).join('')}
      </div>` : ''}
    </div>`;
  }).join('');
};

// Close modal on outside click
document.getElementById('goalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeGoalModal();
});

// ===== INIT =====
renderDashboard();
