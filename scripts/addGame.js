const localGames = JSON.parse(localStorage.getItem('games'));

function addGame() {
  const newGame = {
    name: document.getElementById('name').value,
    releaseDate: document.getElementById('date').value,
    genre: document.getElementById('genre').value,
    cover: '',
  };

  localGames.push(newGame);
  localStorage.setItem('games', JSON.stringify(localGames));
}
