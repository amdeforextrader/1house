// You can add more games the same way as Tic-Tac-Toe (after you make the HTML file!)
const games = [
  {
    title: "Tic Tac Toe",
    desc: "A simple 2-player tic tac toe game.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Tic_tac_toe.svg",
    page: "games/tic-tac-toe.html",
    category: "puzzle"
  },
];

function showGames() {
  const gamesList = document.getElementById('games-list');
  gamesList.innerHTML = '';
  games.forEach(game => {
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

window.onload = showGames;
