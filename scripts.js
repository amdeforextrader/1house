// List of games (add/remove as needed)
const games = [
  {
    title: "Sudoku Master",
    desc: "Challenge yourself with this classic Sudoku puzzle.",
    img: "assets/sudoku.png",
    page: "games/sudoku.html",
    category: "puzzle"
  },
  {
    title: "Brick Breaker",
    desc: "Destroy bricks to score points—arcade classic!",
    img: "assets/brick-breaker.png",
    page: "games/brick-breaker.html",
    category: "arcade"
  },
  {
    title: "Quick Quiz",
    desc: "Test your knowledge with trivia questions.",
    img: "assets/trivia.png",
    page: "games/quick-quiz.html",
    category: "trivia"
  },
  // ...add 17+ more games!
];

function showGames(filter = 'all') {
  const gamesList = document.getElementById('games-list');
  gamesList.innerHTML = '';
  games
    .filter(game => (filter === 'all' ? true : game.category === filter))
    .forEach(game => {
      gamesList.innerHTML += `
        <div class="game-card">
          <a href="${game.page}">
            <img src="${game.img}" alt="${game.title}" />
            <h3>${game.title}</h3>
            <p>${game.desc}</p>
          </a>
        </div>
      `;
    });
}

function filterGames(category) {
  document.querySelectorAll('.categories button').forEach(btn =>
    btn.classList.remove('active')
  );
  const idx = ['all','puzzle','arcade','trivia','strategy'].indexOf(category);
  if(idx >= 0)
    document.querySelectorAll('.categories button')[idx].classList.add('active');
  showGames(category);
}

// Initialize
window.onload = () => {
  filterGames('all');
};
