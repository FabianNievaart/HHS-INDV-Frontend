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
]

function renderCollection() {
    const collection = document.getElementById('collection');
    collection.innerHTML = '';
    games.forEach(game => {
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

renderCollection();
