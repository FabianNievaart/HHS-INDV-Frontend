let localGames = JSON.parse(localStorage.getItem('games'));
let ItemsPerPage = 5;
let currentPage = 1;
let maxPage;
let filteredGames;
let ascending = true;
let sorting = '';
let filter = '';

const genres = localGames.map((game) => game.genre);
const uniqueGenres = [...new Set(genres)];
const selectFilter = document.getElementById('filter');
uniqueGenres.forEach((genre) => {
  const option = document.createElement('option');
  option.value = genre;
  option.innerText = genre;
  selectFilter.appendChild(option);
});

function renderCollection() {
  localGames = JSON.parse(localStorage.getItem('games'));
  ItemsPerPage = document.getElementById('itemsPerPage').value;
  if (filter != '') {
    filteredGames = localGames.filter((game) => game.genre === filter);
  } else {
    filteredGames = [...localGames];
  }

  if (sorting != '') {
    filteredGames.sort((a, b) => {
      if (a[sorting] < b[sorting]) return ascending ? -1 : 1;
      if (a[sorting] > b[sorting]) return ascending ? 1 : -1;
      return 0;
    });
  }

  maxPage = Math.ceil(filteredGames.length / ItemsPerPage);

  gamesOnPage = filteredGames.slice(
    (currentPage - 1) * ItemsPerPage,
    currentPage * ItemsPerPage
  );

  document.getElementById('page').innerText = currentPage;
  document.getElementById('maxPage').innerText = maxPage;

  const collection = document.getElementById('collection');
  collection.innerHTML = '';

  if (currentPage == 1) {
    document.getElementById('prevBtn').disabled = true;
  } else {
    document.getElementById('prevBtn').disabled = false;
  }

  if (currentPage == maxPage) {
    document.getElementById('nextBtn').disabled = true;
  } else {
    document.getElementById('nextBtn').disabled = false;
  }

  gamesOnPage.forEach((game) => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td><img src="${game.cover}" alt="${game.name}" class="item-image"></td>
            <td>${game.name}</td>
            <td>${game.releaseDate}</td>
            <td>${game.genre}</td>
        `;
    collection.appendChild(row);
  });
}

function filterCollection(value) {
  currentPage = 1;
  filter = value;
  maxPage = Math.ceil(filteredGames.length / ItemsPerPage);
  renderCollection();
}

function sortCollection(field) {
  sorting = field;
  renderCollection();
}

function toggleSortOrder() {
  ascending = !ascending;
  document.getElementById('sortOrderBtn').innerHTML = ascending ? '⬆️' : '⬇️';
  renderCollection();
}

function previousPage() {
  currentPage--;
  renderCollection();
}

function nextPage() {
  currentPage++;
  renderCollection();
}

renderCollection();
