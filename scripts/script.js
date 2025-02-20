const games = [
    {name: "Crash Bandicoot N. Sane Trilogy", releaseDate: "2017-06-30", genre: "Platformer", cover: "images/crash-bandicoot.jpg"},
    {name: "The Legend of Zelda: Breath of the Wild", releaseDate: "2017-03-03", genre: "Action-adventure", cover: "images/zelda-breath-of-the-wild.jpg"},
    {name: "Super Mario Odyssey", releaseDate: "2017-10-27", genre: "Platformer", cover: "images/super-mario-odyssey.jpg"},
    {name: "Horizon Zero Dawn", releaseDate: "2017-02-28", genre: "Action RPG", cover: "images/horizon-zero-dawn.jpg"},
    {name: "Assassin's Creed Origins", releaseDate: "2017-10-27", genre: "Action-adventure", cover: "images/assassins-creed-origins.jpg"},
    {name: "Uncharted: The Lost Legacy", releaseDate: "2017-08-22", genre: "Action-adventure", cover: "images/uncharted-the-lost-legacy.jpg"},
    {name: "Resident Evil 7: Biohazard", releaseDate: "2017-01-24", genre: "Survival horror", cover: "images/resident-evil-7-biohazard.jpg"},
    {name: "Nioh", releaseDate: "2017-02-07", genre: "Action RPG", cover: "images/nioh.jpg"},
    {name: "Persona 5", releaseDate: "2017-04-04", genre: "Role-playing", cover: "images/persona-5.jpg"},
    {name: "Yakuza 0", releaseDate: "2017-01-24", genre: "Action-adventure", cover: "images/yakuza-0.jpg"},
    {name: "Mario Kart 8 Deluxe", releaseDate: "2017-04-28", genre: "Racing", cover: "images/mario-kart-8-deluxe.jpg"},
    {name: "Splatoon 2", releaseDate: "2017-07-21", genre: "Shooter", cover: "images/splatoon-2.jpg"},
    {name: "ARMS", releaseDate: "2017-06-16", genre: "Fighting", cover: "images/arms.jpg"},
    {name: "Fire Emblem Warriors", releaseDate: "2017-10-20", genre: "Hack and slash", cover: "images/fire-emblem-warriors.jpg"},
    {name: "Xenoblade Chronicles 2", releaseDate: "2017-12-01", genre: "Action RPG", cover: "images/xenoblade-chronicles-2.jpg"},
    {name: "The Elder Scrolls V: Skyrim", releaseDate: "2017-11-17", genre: "Action RPG", cover: "images/the-elder-scrolls-v-skyrim.jpg"},
    {name: "L.A. Noire", releaseDate: "2017-11-14", genre: "Action-adventure", cover: "images/la-noire.jpg"},
    {name: "Sonic Mania", releaseDate: "2017-08-15", genre: "Platformer", cover: "images/sonic-mania.jpg"},
    {name: "Cuphead", releaseDate: "2017-09-29", genre: "Run and gun", cover: "images/cuphead.jpg"},
    {name: "Hollow Knight", releaseDate: "2017-02-24", genre: "Metroidvania", cover: "images/hollow-knight.jpg"},
    {name: "Night in the Woods", releaseDate: "2017-02-21", genre: "Adventure", cover: "images/night-in-the-woods.jpg"},
    {name: "Pyre", releaseDate: "2017-07-25", genre: "Action RPG", cover: "images/pyre.jpg"},
    {name: "What Remains of Edith Finch", releaseDate: "2017-04-25", genre: "Adventure", cover: "images/what-remains-of-edith-finch.jpg"},
    {name: "Hellblade: Senua's Sacrifice", releaseDate: "2017-08-08", genre: "Action-adventure", cover: "images/hellblade-senuas-sacrifice.jpg"},
    {name: "NieR: Automata", releaseDate: "2017-02-23", genre: "Action RPG", cover: "images/nier-automata.jpg"},
    {name: "Divinity: Original Sin II", releaseDate: "2017-09-14", genre: "Role-playing", cover: "images/divinity-original-sin-ii.jpg"},
    {name: "Prey", releaseDate: "2017-05-05", genre: "Action-adventure", cover: "images/prey.jpg"},
    {name: "Wolfenstein II: The New Colossus", releaseDate: "2017-10-27", genre: "First-person shooter", cover: "images/wolfenstein-ii-the-new-colossus.jpg"},
    {name: "Destiny 2", releaseDate: "2017-09-06", genre: "First-person shooter", cover: "images/destiny-2.jpg"},
    {name: "Call of Duty: WWII", releaseDate: "2017-11-03", genre: "First-person shooter", cover: "images/call-of-duty-wwii.jpg"},
    {name: "Star Wars Battlefront II", releaseDate: "2017-11-17", genre: "First-person shooter", cover: "images/star-wars-battlefront-ii.jpg"},
    {name: "PlayerUnknown's Battlegrounds", releaseDate: "2017-12-20", genre: "Battle royale", cover: "images/playerunknowns-battlegrounds.jpg"},
    {name: "Fortnite", releaseDate: "2017-07-25", genre: "Battle royale", cover: "images/fortnite.jpg"},
    {name: "Overwatch", releaseDate: "2016-05-24", genre: "First-person shooter", cover: "images/overwatch.jpg"},
    {name: "Tom Clancy's Rainbow Six Siege", releaseDate: "2015-12-01", genre: "First-person shooter", cover: "images/tom-clancys-rainbow-six-siege.jpg"},
    {name: "Counter-Strike: Global Offensive", releaseDate: "2012-08-21", genre: "First-person shooter", cover: "images/counter-strike-global-offensive.jpg"},
    {name: "League of Legends", releaseDate: "2009-10-27", genre: "MOBA", cover: "images/league-of-legends.jpg"},
    {name: "Dota 2", releaseDate: "2013-07-09", genre: "MOBA", cover: "images/dota-2.jpg"},
    {name: "World of Warcraft", releaseDate: "2004-11-23", genre: "MMORPG", cover: "images/world-of-warcraft.jpg"},
    {name: "Final Fantasy XIV", releaseDate: "2010-09-30", genre: "MMORPG", cover: "images/final-fantasy-xiv.jpg"},
    {name: "The Elder Scrolls Online", releaseDate: "2014-04-04", genre: "MMORPG", cover: "images/the-elder-scrolls-online.jpg"},
    {name: "Guild Wars 2", releaseDate: "2012-08-28", genre: "MMORPG", cover: "images/guild-wars-2.jpg"},
    {name: "Black Desert Online", releaseDate: "2014-12-17", genre: "MMORPG", cover: "images/black-desert-online.jpg"},
    {name: "Path of Exile", releaseDate: "2013-10-23", genre: "Action RPG", cover: "images/path-of-exile.jpg"},
    {name: "Diablo III", releaseDate: "2012-05-15", genre: "Action RPG", cover: "images/diablo-iii.jpg"},
    {name: "Torchlight II", releaseDate: "2012-09-20", genre: "Action RPG", cover: "images/torchlight-ii.jpg"},
    {name: "Grim Dawn", releaseDate: "2016-02-25", genre: "Action RPG", cover: "images/grim-dawn.jpg"},
    {name: "Titan Quest", releaseDate: "2006-06-26", genre: "Action RPG", cover: "images/titan-quest.jpg"},
    {name: "The Witcher 3: Wild Hunt", releaseDate: "2015-05-19", genre: "Action RPG", cover: "images/the-witcher-3-wild-hunt.jpg"},
    {name: "Dark Souls III", releaseDate: "2016-04-12", genre: "Action RPG", cover: "images/dark-souls-iii.jpg"},
    {name: "Bloodborne", releaseDate: "2015-03-24", genre: "Action RPG", cover: "images/bloodborne.jpg"},
    {name: "Nioh", releaseDate: "2017-02-07", genre: "Action RPG", cover: "images/nioh.jpg"},
    {name: "Monster Hunter: World", releaseDate: "2018-01-26", genre: "Action RPG", cover: "images/monster-hunter-world.jpg"},
    {name: "Dragon's Dogma: Dark Arisen", releaseDate: "2012-04-23", genre: "Action RPG", cover: "images/dragons-dogma-dark-arisen.jpg"},
    {name: "Kingdom Come: Deliverance", releaseDate: "2018-02-13", genre: "Action RPG", cover: "images/kingdom-come-deliverance.jpg"}
]
const ItemsPerPage = 5;
let currentPage = 1;
let maxPage;
let filteredGames;
let ascending = true;
let sorting = "";
let filter = "";

const genres = games.map(game => game.genre);
const uniqueGenres = [...new Set(genres)];
const selectFilter = document.getElementById('filter');
uniqueGenres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.innerText = genre;
    selectFilter.appendChild(option);
});

function renderCollection() {
    if (filter != "") {
        filteredGames = games.filter(game => game.genre === filter);
    }else{
        filteredGames = [...games];
    }

    if (sorting != "") {
        filteredGames.sort((a, b) => {
            if (a[sorting] < b[sorting]) return ascending ? -1 : 1;
            if (a[sorting] > b[sorting]) return ascending ? 1 : -1;
            return 0;
        });
    }

    maxPage = Math.ceil(filteredGames.length / ItemsPerPage);

    gamesOnPage = filteredGames.slice((currentPage - 1) * ItemsPerPage, currentPage * ItemsPerPage);

    document.getElementById('page').innerText = currentPage;
    document.getElementById('maxPage').innerText = maxPage;

    const collection = document.getElementById('collection');
    collection.innerHTML = '';

    if (currentPage == 1) {
        document.getElementById('prevBtn').disabled = true;
    }else {
        document.getElementById('prevBtn').disabled = false;
    }

    if (currentPage == maxPage) {
        document.getElementById('nextBtn').disabled = true;
    }else {
        document.getElementById('nextBtn').disabled = false;
    }

    gamesOnPage.forEach(game => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${game.image}" alt="${game.name}" class="item-image"></td>
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

