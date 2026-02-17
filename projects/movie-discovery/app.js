// ===== STATE =====
let watchlist = JSON.parse(localStorage.getItem('cineverse_wl')) || [];
let userRatings = JSON.parse(localStorage.getItem('cineverse_ratings')) || {};
let activeGenre = 'All';
let isDark = true;

// ===== THEME =====
document.getElementById('themeToggle').addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('light-theme', !isDark);
  document.getElementById('themeToggle').textContent = isDark ? '🌙' : '☀️';
});

// ===== NAVIGATION =====
window.showPage = function(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('heroSection').style.display = page === 'home' ? '' : 'none';
  document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));

  if (page === 'home') {
    document.getElementById('homePage').classList.add('active');
    document.querySelectorAll('.main-nav a')[0].classList.add('active');
    renderGenreFilter('genreFilter', 'home');
    renderRows();
  }
  if (page === 'watchlist') {
    document.getElementById('watchlistPage').classList.add('active');
    document.querySelectorAll('.main-nav a')[1].classList.add('active');
    renderWatchlist();
  }
  if (page === 'search') {
    document.getElementById('searchPage').classList.add('active');
    document.querySelectorAll('.main-nav a')[2].classList.add('active');
    renderGenreFilter('searchGenreFilter', 'search');
    doSearch('');
  }
};

// ===== GENRE FILTER =====
function renderGenreFilter(containerId, context) {
  const genres = ['All', ...ALL_GENRES];
  document.getElementById(containerId).innerHTML = genres.map(g =>
    `<button class="genre-pill ${g === activeGenre ? 'active' : ''}"
      onclick="setGenre('${g}', '${context}')">${g}</button>`
  ).join('');
}

window.setGenre = function(genre, context) {
  activeGenre = genre;
  if (context === 'home') { renderGenreFilter('genreFilter', 'home'); renderRows(); }
  if (context === 'search') { renderGenreFilter('searchGenreFilter', 'search'); doSearch(document.getElementById('bigSearch').value); }
};

// ===== MOVIE ROWS =====
function renderRows() {
  const filter = m => activeGenre === 'All' || m.genre.includes(activeGenre);
  renderMovieRow('trendingRow', MOVIES.filter(m => m.trending && filter(m)));
  renderMovieRow('topRatedRow', [...MOVIES].filter(filter).sort((a, b) => b.rating - a.rating).slice(0, 12));
  renderMovieRow('classicsRow', MOVIES.filter(m => m.year < 2020 && filter(m)).sort((a, b) => b.rating - a.rating).slice(0, 12));
}

function renderMovieRow(id, movies) {
  document.getElementById(id).innerHTML = movies.map(m => movieCardHTML(m)).join('');
}

function movieCardHTML(movie) {
  const inWL = watchlist.some(w => w.id === movie.id);
  return `<div class="movie-card" onclick="openModal(MOVIES.find(m=>m.id===${movie.id}))">
    <div class="movie-poster" style="background:${movie.color}20">
      <div class="movie-poster-fallback" style="background:linear-gradient(135deg,${movie.color}40,${movie.color}10)">
        <span style="color:white;font-family:'Bebas Neue';font-size:1rem;letter-spacing:0.05em;text-align:center;padding:0.5rem">${movie.title}</span>
      </div>
      <div class="poster-overlay">
        <div class="play-btn">▶</div>
      </div>
      ${inWL ? '<div class="wl-indicator">✓ WL</div>' : ''}
    </div>
    <div class="movie-title">${movie.title}</div>
    <div class="movie-sub">
      <span class="star">⭐</span>
      <span>${movie.rating}</span>
      <span>·</span>
      <span>${movie.year}</span>
    </div>
  </div>`;
}

// ===== WATCHLIST =====
window.addToWatchlist = function(movie) {
  if (!movie) return;
  const exists = watchlist.some(m => m.id === movie.id);
  if (exists) {
    watchlist = watchlist.filter(m => m.id !== movie.id);
    showToast(`"${movie.title}" removed from watchlist`);
  } else {
    watchlist.push(movie);
    showToast(`"${movie.title}" added to watchlist ✓`);
  }
  localStorage.setItem('cineverse_wl', JSON.stringify(watchlist));
  updateWatchBadge();
  renderWatchlist();
};

function updateWatchBadge() {
  const badge = document.getElementById('watchBadge');
  badge.style.display = watchlist.length ? 'inline' : 'none';
  badge.textContent = watchlist.length;
}

function renderWatchlist() {
  const grid = document.getElementById('watchlistGrid');
  const empty = document.getElementById('watchlistEmpty');
  const count = document.getElementById('watchlistCount');

  count.textContent = `${watchlist.length} movie${watchlist.length !== 1 ? 's' : ''} saved`;

  if (watchlist.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.innerHTML = watchlist.map(movie => movieCardHTML(movie)).join('');
}

// ===== SEARCH =====
window.handleHomeSearch = function(val) {
  if (val.trim()) {
    showPage('search');
    document.getElementById('bigSearch').value = val;
    doSearch(val);
  }
};

window.doSearch = function(query) {
  const q = query.toLowerCase().trim();
  const filtered = MOVIES.filter(m => {
    const matchGenre = activeGenre === 'All' || m.genre.includes(activeGenre);
    const matchQ = !q || m.title.toLowerCase().includes(q) ||
      m.director.toLowerCase().includes(q) ||
      m.cast.some(c => c.toLowerCase().includes(q)) ||
      m.genre.some(g => g.toLowerCase().includes(q));
    return matchGenre && matchQ;
  });

  const label = document.getElementById('searchResultLabel');
  const grid = document.getElementById('searchGrid');
  const empty = document.getElementById('searchEmpty');

  if (filtered.length === 0) {
    grid.innerHTML = '';
    label.textContent = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    label.textContent = q ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${q}"` : `${filtered.length} movies`;
    grid.innerHTML = filtered.map(m => movieCardHTML(m)).join('');
  }
};

// ===== MODAL =====
window.openModal = function(movie) {
  if (!movie) return;
  const inWL = watchlist.some(m => m.id === movie.id);
  const userRating = userRatings[movie.id] || 0;
  const stars = [1,2,3,4,5].map(i =>
    `<button class="star-btn ${i <= userRating ? 'active' : ''}" onclick="rateMovie(${movie.id}, ${i})"
      id="star_${movie.id}_${i}">★</button>`
  ).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-backdrop-fallback" style="background:linear-gradient(135deg,${movie.color}50,${movie.color}15)">
      <span style="font-family:'Bebas Neue';font-size:2rem;letter-spacing:0.1em;color:white;opacity:0.8">${movie.title}</span>
    </div>
    <div class="modal-body">
      <h2 class="modal-title">${movie.title}</h2>
      <div class="modal-meta">
        <span class="modal-rating">⭐ ${movie.rating}/10</span>
        <span>${movie.year}</span>
        <span>${movie.runtime}</span>
        ${movie.genre.map(g => `<span class="modal-genre-tag">${g}</span>`).join('')}
      </div>
      <p class="modal-desc">${movie.desc}</p>
      <div class="modal-info">
        <div class="modal-info-item">
          <label>Director</label>
          <span>${movie.director}</span>
        </div>
        <div class="modal-info-item">
          <label>Runtime</label>
          <span>${movie.runtime}</span>
        </div>
        <div class="modal-info-item" style="grid-column:1/-1">
          <label>Cast</label>
          <span>${movie.cast.join(' · ')}</span>
        </div>
      </div>
      <div style="margin-bottom:1rem">
        <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:0.08em">Your Rating</div>
        <div class="user-rating">
          ${stars}
          <span class="rating-label">${userRating ? `${userRating}/5` : 'Rate this movie'}</span>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-watch" onclick="showTrailerMsg('${movie.title.replace(/'/g,"\\'")}')">▶ Watch Trailer</button>
        <button class="btn-outline" id="wlBtn_${movie.id}"
          onclick="addToWatchlist(MOVIES.find(m=>m.id===${movie.id}));updateWLBtn(${movie.id})"
          style="background:rgba(255,255,255,0.08);color:var(--text)">
          ${inWL ? '✓ In Watchlist' : '+ Watchlist'}
        </button>
        <button class="btn-outline" onclick="shareMovie('${movie.title.replace(/'/g,"\\'")}', ${movie.rating})"
          style="background:rgba(255,255,255,0.08);color:var(--text)">
          ↗ Share
        </button>
      </div>
    </div>
  `;

  document.getElementById('modalBackdrop').classList.add('open');
};

window.updateWLBtn = function(id) {
  const btn = document.getElementById(`wlBtn_${id}`);
  if (btn) {
    const inWL = watchlist.some(m => m.id === id);
    btn.textContent = inWL ? '✓ In Watchlist' : '+ Watchlist';
  }
  renderRows();
};

window.rateMovie = function(movieId, rating) {
  userRatings[movieId] = rating;
  localStorage.setItem('cineverse_ratings', JSON.stringify(userRatings));

  document.querySelectorAll(`[id^="star_${movieId}_"]`).forEach((btn, i) => {
    btn.classList.toggle('active', i + 1 <= rating);
  });

  const label = document.querySelector('.rating-label');
  if (label) label.textContent = `${rating}/5`;
  showToast(`Rated ${rating}/5 ⭐`);
};

window.showTrailerMsg = function(title) {
  showToast(`Trailer for "${title}" would open here`);
};

window.shareMovie = function(title, rating) {
  const text = `Check out "${title}" — rated ${rating}/10 on CineVerse!`;
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => showToast('Link copied! 📋'));
  else showToast('Share: ' + text);
};

window.closeModal = function() {
  document.getElementById('modalBackdrop').classList.remove('open');
  renderRows();
};

document.getElementById('modalBackdrop').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

// ===== HERO CYCLE =====
let heroIdx = 0;
function cycleHero() {
  const movie = heroMovies[heroIdx % heroMovies.length];
  document.getElementById('heroTitle').textContent = movie.title;
  document.getElementById('heroDesc').textContent = movie.desc;
  document.getElementById('heroBg').style.background = `linear-gradient(135deg, ${movie.color}30, #0d0d0d)`;
  heroIdx++;
}

cycleHero();
setInterval(cycleHero, 5000);

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== INIT =====
updateWatchBadge();
showPage('home');
