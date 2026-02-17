const RECIPES = [
  {id:1,title:"Spring Pea & Mint Risotto",emoji:"🌿",bg:"#e8f5ec",time:"35 min",servings:4,cals:420,difficulty:"Medium",category:"Vegetarian",diet:"veg",tags:["Italian","Seasonal"],rating:4.8,
  ingredients:["300g arborio rice","200g fresh peas","1L vegetable stock","1 onion, diced","2 cloves garlic","50ml white wine","30g parmesan, grated","Handful fresh mint","2 tbsp olive oil","Salt & pepper"],
  steps:["Heat stock in a separate pan and keep warm.","Sauté onion and garlic in olive oil until softened.","Add rice and toast for 2 mins. Deglaze with white wine.","Add stock ladle by ladle, stirring constantly (25 min).","Stir in peas in the last 5 minutes.","Finish with parmesan, mint, and season to taste."]},
  {id:2,title:"Honey Lemon Roast Chicken",emoji:"🍋",bg:"#fef3e2",time:"1h 15min",servings:4,cals:520,difficulty:"Easy",category:"Dinner",diet:"",tags:["Classic","Comfort"],rating:4.9,
  ingredients:["1 whole chicken (1.5kg)","2 lemons, zested & juiced","4 tbsp honey","4 cloves garlic","2 tbsp olive oil","Fresh thyme sprigs","Salt & pepper","500g baby potatoes"],
  steps:["Preheat oven to 200°C.","Mix honey, lemon juice, zest, garlic and olive oil.","Rub all over the chicken and under the skin.","Place on a bed of baby potatoes and thyme.","Roast 1h 15min, basting halfway.","Rest 10 minutes before carving."]},
  {id:3,title:"Strawberry Basil Tart",emoji:"🍓",bg:"#fce8e8",time:"45 min",servings:8,cals:310,difficulty:"Medium",category:"Dessert",diet:"veg",tags:["Summer","Sweet"],rating:4.7,
  ingredients:["1 sheet shortcrust pastry","300g strawberries","200g mascarpone","2 tbsp icing sugar","1 lemon, zested","Fresh basil leaves","2 tbsp strawberry jam (glaze)"],
  steps:["Press pastry into tart tin, blind bake 20 min at 180°C.","Beat mascarpone with sugar and lemon zest.","Spread filling into cooled pastry case.","Arrange sliced strawberries on top.","Warm jam and brush over berries.","Garnish with fresh basil leaves."]},
  {id:4,title:"Thai Green Curry",emoji:"🥥",bg:"#e8f0fe",time:"30 min",servings:4,cals:480,difficulty:"Easy",category:"Dinner",diet:"",tags:["Thai","Spicy"],rating:4.6,
  ingredients:["400ml coconut milk","2 tbsp green curry paste","400g chicken breast","200g Thai eggplant","1 bell pepper","Fish sauce to taste","Fresh basil","Jasmine rice to serve","Lime wedges"],
  steps:["Fry curry paste in a little oil for 1 minute.","Add coconut milk and bring to simmer.","Add chicken and vegetables.","Simmer 15-20 minutes until cooked through.","Season with fish sauce and lime juice.","Serve over jasmine rice with fresh basil."]},
  {id:5,title:"Shakshuka",emoji:"🍳",bg:"#fef3e2",time:"25 min",servings:2,cals:320,difficulty:"Easy",category:"Breakfast",diet:"veg",tags:["Mediterranean","Quick"],rating:4.8,
  ingredients:["4 large eggs","400g chopped tomatoes","1 onion, diced","1 red pepper","2 cloves garlic","1 tsp cumin","1 tsp paprika","Fresh coriander","Crusty bread to serve","Feta cheese (optional)"],
  steps:["Sauté onion, pepper, and garlic in olive oil.","Add spices and cook 1 minute.","Pour in chopped tomatoes and simmer 10 min.","Make wells in sauce and crack in eggs.","Cover and cook 6–8 min until whites set.","Serve with fresh coriander and crusty bread."]},
  {id:6,title:"Avocado Toast 3 Ways",emoji:"🥑",bg:"#e8f5ec",time:"10 min",servings:2,cals:280,difficulty:"Easy",category:"Breakfast",diet:"veg",tags:["Quick","Healthy"],rating:4.5,
  ingredients:["2 slices sourdough bread","1 ripe avocado","Lemon juice","Sea salt & red chilli flakes","Option A: Poached egg + smoked salmon","Option B: Radishes + hemp seeds","Option C: Cherry tomatoes + balsamic"],
  steps:["Toast bread until golden and crisp.","Mash avocado with lemon juice and salt.","Spread generously on toast.","Add your topping of choice.","Finish with chilli flakes and a drizzle of olive oil."]},
  {id:7,title:"Mushroom & Gruyère Galette",emoji:"🍄",bg:"#f4ede0",time:"50 min",servings:4,cals:395,difficulty:"Medium",category:"Lunch",diet:"veg",tags:["French","Rustic"],rating:4.7,
  ingredients:["300g mixed mushrooms","100g Gruyère, grated","1 sheet puff pastry","2 shallots","Fresh thyme","1 tbsp crème fraîche","1 egg (egg wash)","Dijon mustard"],
  steps:["Sauté shallots and mushrooms in butter until golden.","Season well, add thyme.","Roll pastry into rough circle, spread mustard in centre.","Top with mushroom mix, leaving 5cm border.","Fold edges over and brush with egg wash.","Bake 30–35 min at 200°C until golden."]},
  {id:8,title:"Mango Coconut Chia Pudding",emoji:"🥭",bg:"#fef9e2",time:"10 min",servings:2,cals:250,difficulty:"Easy",category:"Breakfast",diet:"veg",tags:["Healthy","No-Cook"],rating:4.6,
  ingredients:["4 tbsp chia seeds","250ml coconut milk","1 tbsp honey or maple syrup","1 ripe mango, diced","Lime zest","Toasted coconut flakes","Mint to garnish"],
  steps:["Whisk chia seeds into coconut milk with sweetener.","Refrigerate overnight (min 4 hours).","Stir well before serving.","Top with fresh mango cubes.","Garnish with lime zest and coconut flakes."]},
  {id:9,title:"Pasta al Limone",emoji:"🍝",bg:"#fefce8",time:"20 min",servings:2,cals:490,difficulty:"Easy",category:"Dinner",diet:"veg",tags:["Italian","Quick"],rating:4.9,
  ingredients:["200g spaghetti","2 lemons, zested & juiced","80ml cream","40g parmesan, grated","30g butter","2 cloves garlic","Salt & lots of black pepper","Fresh parsley"],
  steps:["Cook pasta in heavily salted water.","Melt butter and sauté garlic 1 min.","Add cream and lemon juice, simmer gently.","Reserve 1 cup pasta water, then drain pasta.","Toss pasta in sauce with parmesan.","Add pasta water to loosen. Finish with lemon zest."]},
  {id:10,title:"One-Pan Salmon & Asparagus",emoji:"🐟",bg:"#e8f5f8",time:"20 min",servings:2,cals:440,difficulty:"Easy",category:"Dinner",diet:"",tags:["Healthy","Quick"],rating:4.7,
  ingredients:["2 salmon fillets","1 bunch asparagus","2 tbsp soy sauce","1 tbsp sesame oil","1 tbsp honey","2 cloves garlic","Sesame seeds","Lemon wedges"],
  steps:["Mix soy sauce, honey, sesame oil and garlic.","Marinate salmon 10 min.","Heat oven to 200°C.","Place salmon and asparagus on a tray.","Spoon over marinade.","Roast 12–15 min until salmon flakes easily."]},
  {id:11,title:"Classic French Onion Soup",emoji:"🧅",bg:"#f8f0e4",time:"1h 30min",servings:4,cals:380,difficulty:"Medium",category:"Lunch",diet:"veg",tags:["French","Comfort"],rating:4.8,
  ingredients:["1kg onions, thinly sliced","100ml white wine","1L beef/vegetable stock","4 slices baguette","100g Gruyère, grated","50g butter","1 tbsp flour","Fresh thyme"],
  steps:["Caramelise onions in butter over low heat (45–60 min).","Add flour and stir 2 min.","Deglaze with wine. Add stock and simmer 20 min.","Ladle soup into ovenproof bowls.","Top with baguette slice and grated cheese.","Grill until cheese is bubbling and golden."]},
  {id:12,title:"Blueberry Lemon Loaf Cake",emoji:"🫐",bg:"#ede8f8",time:"55 min",servings:8,cals:290,difficulty:"Easy",category:"Dessert",diet:"veg",tags:["Baking","Sweet"],rating:4.6,
  ingredients:["200g plain flour","150g caster sugar","2 eggs","100ml natural yoghurt","80ml sunflower oil","1 lemon, zested","150g fresh blueberries","1 tsp baking powder","Pinch of salt"],
  steps:["Preheat oven to 175°C. Line a loaf tin.","Beat eggs, sugar, oil, and yoghurt together.","Fold in flour, baking powder, lemon zest.","Gently fold in blueberries.","Pour into tin and bake 50–55 min.","Cool completely before slicing."]}
];

const CATEGORIES = ["All","Breakfast","Lunch","Dinner","Dessert","Vegetarian"];
const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const MEAL_SLOTS = ["Breakfast","Lunch","Dinner"];

let saved = JSON.parse(localStorage.getItem('savor_saved')) || [];
let mealPlan = JSON.parse(localStorage.getItem('savor_plan')) || {};
let shoppingItems = JSON.parse(localStorage.getItem('savor_shop')) || [];
let activeFilter = 'All';
let currentSearch = '';

const save = () => {
  localStorage.setItem('savor_saved', JSON.stringify(saved));
  localStorage.setItem('savor_plan', JSON.stringify(mealPlan));
  localStorage.setItem('savor_shop', JSON.stringify(shoppingItems));
};

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

window.showPage = function(p) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.ntab').forEach(x => x.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  document.querySelectorAll('.ntab')[['discover','planner','saved','shopping'].indexOf(p)]?.classList.add('active');
  if(p==='discover') renderRecipes();
  if(p==='planner') renderPlanner();
  if(p==='saved') renderSaved();
  if(p==='shopping') renderShopping();
};

window.scrollToRecipes = function() {
  document.getElementById('recipesGrid').scrollIntoView({behavior:'smooth'});
};

// ===== FILTERS =====
function renderCatFilter() {
  document.getElementById('catFilter').innerHTML = CATEGORIES.map(c =>
    `<button class="cat-pill ${c===activeFilter?'active':''}" onclick="setFilter('${c}')">${
      c==='All'?'🍽️ '+c:c==='Breakfast'?'🌅 '+c:c==='Lunch'?'🥗 '+c:c==='Dinner'?'🍲 '+c:c==='Dessert'?'🍰 '+c:'🥦 '+c
    }</button>`
  ).join('');
}

window.setFilter = function(f) {
  activeFilter = f;
  renderCatFilter();
  renderRecipes();
};

// ===== RECIPES =====
function renderRecipes() {
  const q = currentSearch.toLowerCase();
  let list = RECIPES.filter(r => {
    const catMatch = activeFilter === 'All' || r.category === activeFilter || (activeFilter === 'Vegetarian' && r.diet === 'veg');
    const searchMatch = !q || r.title.toLowerCase().includes(q) || r.tags.some(t => t.toLowerCase().includes(q)) || r.ingredients.some(i => i.toLowerCase().includes(q));
    return catMatch && searchMatch;
  });
  document.getElementById('recipesGrid').innerHTML = list.map(r => recipeCardHTML(r)).join('');
}

function recipeCardHTML(r) {
  const isSaved = saved.includes(r.id);
  return `<div class="recipe-card" onclick="openRecipe(${r.id})">
    <div class="recipe-thumb" style="background:${r.bg}">
      <span>${r.emoji}</span>
      <span class="recipe-badge" style="color:#1e2d1e">⭐ ${r.rating}</span>
      <button class="save-btn ${isSaved?'saved':''}" onclick="toggleSave(event,${r.id})">${isSaved?'❤️':'🤍'}</button>
    </div>
    <div class="recipe-body">
      <div class="recipe-title">${r.title}</div>
      <div class="recipe-meta"><span>⏱ ${r.time}</span><span>👤 ${r.servings}</span><span>🔥 ${r.cals} kcal</span></div>
      <div class="recipe-tags">
        <span class="rtag rtag-diff">${r.difficulty}</span>
        <span class="rtag rtag-cat">${r.category}</span>
        ${r.diet==='veg'?'<span class="rtag rtag-veg">🌱 Veg</span>':''}
      </div>
      <button class="add-plan-btn" onclick="quickAddToPlan(event,${r.id})">+ Add to Meal Plan</button>
    </div>
  </div>`;
}

window.toggleSave = function(e, id) {
  e.stopPropagation();
  if (saved.includes(id)) {
    saved = saved.filter(s => s !== id);
    toast('Removed from saved recipes');
  } else {
    saved.push(id);
    toast('Recipe saved! ❤️');
  }
  save();
  updateSaveBadge();
  renderRecipes();
};

window.quickAddToPlan = function(e, id) {
  e.stopPropagation();
  const r = RECIPES.find(x => x.id === id);
  const day = DAYS[0];
  const slot = MEAL_SLOTS[1];
  if (!mealPlan[day]) mealPlan[day] = {};
  mealPlan[day][slot] = { id: r.id, title: r.title };
  save();
  toast(`"${r.title}" added to ${day} ${slot}! 📅`);
};

function updateSaveBadge() {
  const b = document.getElementById('savedBadge');
  b.textContent = saved.length;
  b.style.display = saved.length ? 'inline' : 'none';
}

// ===== RECIPE MODAL =====
window.openRecipe = function(id) {
  const r = RECIPES.find(x => x.id === id);
  const isSaved = saved.includes(id);
  document.getElementById('modalInner').innerHTML = `
    <div class="modal-thumb" style="background:${r.bg}">
      <span>${r.emoji}</span>
      <button class="modal-close" onclick="closeRecipe()">✕</button>
    </div>
    <div class="modal-body">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:.5rem;margin-bottom:.75rem">
        <h2 class="modal-title">${r.title}</h2>
        <div style="display:flex;gap:.35rem;flex-wrap:wrap">
          <span class="rtag rtag-diff">${r.difficulty}</span>
          <span class="rtag rtag-cat">${r.category}</span>
          ${r.diet==='veg'?'<span class="rtag rtag-veg">🌱 Vegetarian</span>':''}
        </div>
      </div>
      <div class="modal-meta-row">
        <div class="modal-meta-item"><strong>${r.time}</strong><span>Time</span></div>
        <div class="modal-meta-item"><strong>${r.servings}</strong><span>Servings</span></div>
        <div class="modal-meta-item"><strong>${r.cals}</strong><span>Calories</span></div>
        <div class="modal-meta-item"><strong>⭐ ${r.rating}</strong><span>Rating</span></div>
      </div>
      <div class="modal-section">
        <h4>📋 Ingredients</h4>
        <div class="ingred-list">${r.ingredients.map(i=>`<div class="ingred-item">${i}</div>`).join('')}</div>
      </div>
      <div class="modal-section">
        <h4>👨‍🍳 Method</h4>
        <div class="step-list">${r.steps.map((s,i)=>`<div class="step-item"><div class="step-num">${i+1}</div><div>${s}</div></div>`).join('')}</div>
      </div>
      <div class="modal-actions">
        <button class="btn-herb" onclick="addToShoppingFromRecipe(${id})">🛒 Add to Shopping List</button>
        <button class="btn-outline" onclick="toggleSaveModal(${id})" id="modalSaveBtn">${isSaved?'❤️ Saved':'🤍 Save Recipe'}</button>
        <select class="btn-outline" style="cursor:pointer" onchange="addToPlanFromModal(${id}, this.value)">
          <option value="">+ Add to Plan...</option>
          ${DAYS.map(d=>MEAL_SLOTS.map(s=>`<option value="${d}|${s}">${d} — ${s}</option>`).join('')).join('')}
        </select>
      </div>
    </div>`;
  document.getElementById('recipeModal').classList.add('open');
};

window.closeRecipe = function() { document.getElementById('recipeModal').classList.remove('open'); };

window.toggleSaveModal = function(id) {
  if (saved.includes(id)) { saved = saved.filter(s=>s!==id); toast('Removed from saved'); }
  else { saved.push(id); toast('Recipe saved! ❤️'); }
  save();
  updateSaveBadge();
  const btn = document.getElementById('modalSaveBtn');
  if(btn) btn.textContent = saved.includes(id) ? '❤️ Saved' : '🤍 Save Recipe';
};

window.addToPlanFromModal = function(id, val) {
  if (!val) return;
  const [day, slot] = val.split('|');
  const r = RECIPES.find(x=>x.id===id);
  if (!mealPlan[day]) mealPlan[day] = {};
  mealPlan[day][slot] = { id: r.id, title: r.title };
  save();
  toast(`"${r.title}" → ${day} ${slot} ✓`);
};

window.addToShoppingFromRecipe = function(id) {
  const r = RECIPES.find(x=>x.id===id);
  let added = 0;
  r.ingredients.forEach(ing => {
    if (!shoppingItems.find(s=>s.name===ing)) {
      shoppingItems.push({ id: Date.now()+Math.random(), name: ing, checked: false, category: r.category, source: r.title });
      added++;
    }
  });
  save();
  closeRecipe();
  toast(`${added} ingredients added to shopping list 🛒`);
};

document.getElementById('recipeModal').addEventListener('click', e => { if(e.target===e.currentTarget) closeRecipe(); });

// ===== PLANNER =====
function renderPlanner() {
  document.getElementById('plannerGrid').innerHTML = DAYS.map(day => {
    const today = new Date();
    const dayIdx = DAYS.indexOf(day);
    const dateStr = new Date(today.setDate(today.getDate() - today.getDay() + dayIdx + 1))
      .toLocaleDateString('en-US', { month:'short', day:'numeric' });

    return `<div class="planner-day">
      <div class="planner-day-head">
        <div class="planner-day-name">${day.slice(0,3)}</div>
        <div class="planner-day-date">${dateStr}</div>
      </div>
      ${MEAL_SLOTS.map(slot => {
        const meal = mealPlan[day]?.[slot];
        return `<div class="meal-slot">
          <div class="meal-slot-label">${slot}</div>
          ${meal
            ? `<div class="meal-entry">${meal.title}<button class="meal-remove" onclick="removeMeal('${day}','${slot}')">✕</button></div>`
            : `<button class="meal-empty-btn" onclick="openPlanSelector('${day}','${slot}')">+ Add</button>`}
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
}

window.removeMeal = function(day, slot) {
  if (mealPlan[day]) { delete mealPlan[day][slot]; if(!Object.keys(mealPlan[day]).length) delete mealPlan[day]; }
  save(); renderPlanner();
};

window.openPlanSelector = function(day, slot) {
  const r = RECIPES[Math.floor(Math.random() * RECIPES.length)];
  if (!mealPlan[day]) mealPlan[day] = {};
  mealPlan[day][slot] = { id: r.id, title: r.title };
  save(); renderPlanner();
  toast(`Added "${r.title}" ✓`);
};

window.clearPlanner = function() {
  mealPlan = {};
  save(); renderPlanner();
  toast('Planner cleared');
};

// ===== SAVED =====
function renderSaved() {
  const list = RECIPES.filter(r => saved.includes(r.id));
  const grid = document.getElementById('savedGrid');
  const empty = document.getElementById('savedEmpty');
  if (list.length === 0) { grid.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display = 'none';
  grid.innerHTML = list.map(r => recipeCardHTML(r)).join('');
}

// ===== SHOPPING =====
window.generateShoppingList = function() {
  shoppingItems = [];
  Object.values(mealPlan).forEach(day => {
    Object.values(day).forEach(meal => {
      const r = RECIPES.find(x=>x.id===meal.id);
      if(r) r.ingredients.forEach(ing => {
        if (!shoppingItems.find(s=>s.name===ing))
          shoppingItems.push({ id: Date.now()+Math.random(), name: ing, checked: false, source: r.title });
      });
    });
  });
  if (!shoppingItems.length) {
    toast('Add meals to your planner first!'); return;
  }
  save(); renderShopping();
  toast(`${shoppingItems.length} items generated from plan 🛒`);
};

window.addManualItem = function() {
  const name = prompt('Add item to shopping list:');
  if (name?.trim()) {
    shoppingItems.push({ id: Date.now(), name: name.trim(), checked: false, source: 'Manual' });
    save(); renderShopping();
  }
};

function renderShopping() {
  const groups = {};
  shoppingItems.forEach(item => {
    const g = item.source || 'Other';
    if (!groups[g]) groups[g] = [];
    groups[g].push(item);
  });

  if (!shoppingItems.length) {
    document.getElementById('shoppingList').innerHTML = `<div class="empty-box"><div class="empty-icon">🛒</div><h3>Shopping list is empty</h3><p>Generate from your meal plan or add items manually.</p><button class="btn-herb" onclick="generateShoppingList()">Generate from Plan</button></div>`;
  } else {
    document.getElementById('shoppingList').innerHTML = Object.entries(groups).map(([src, items]) => `
      <div class="shop-section">
        <div class="shop-section-title">🍽️ ${src}</div>
        ${items.map(item => `
          <div class="shop-item">
            <div class="shop-cb ${item.checked?'checked':''}" onclick="toggleShopItem('${item.id}')">${item.checked?'✓':''}</div>
            <span class="shop-name ${item.checked?'checked':''}">${item.name}</span>
          </div>`).join('')}
      </div>`).join('');
  }

  const checked = shoppingItems.filter(i=>i.checked).length;
  document.getElementById('shopSummary').innerHTML = `
    <div style="font-size:.82rem;color:var(--text-mid);line-height:1.8">
      <div>Total items: <strong>${shoppingItems.length}</strong></div>
      <div>Checked off: <strong style="color:var(--herb)">${checked}</strong></div>
      <div>Remaining: <strong>${shoppingItems.length - checked}</strong></div>
    </div>`;

  document.getElementById('prepTips').innerHTML = [
    "Shop the perimeter of the store first — fresh produce, dairy, and meats.",
    "Batch similar items together to save time.",
    "Check your pantry before leaving — you may already have dry goods.",
    "Buy seasonal produce for best flavor and value."
  ].map(t=>`<li>${t}</li>`).join('');
}

window.toggleShopItem = function(id) {
  const item = shoppingItems.find(i=>i.id==id);
  if(item) { item.checked = !item.checked; save(); renderShopping(); }
};

// ===== SEARCH =====
document.getElementById('mainSearch').addEventListener('input', function() {
  currentSearch = this.value;
  const p = document.querySelector('.page.active').id;
  if (p === 'page-discover') renderRecipes();
});

// ===== INIT =====
renderCatFilter();
renderRecipes();
updateSaveBadge();
