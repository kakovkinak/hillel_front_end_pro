function createAlbum () {
    const newAlbum = {};
    newAlbum.name = prompt('Название альбома?', '');
    newAlbum.songscount = prompt('Количество песен?', '');
    newAlbum.author = prompt('Автор песен?', '');
    newAlbum.producer = prompt('Продюсер?', '');
    return newAlbum;
}

const albums = [];
const albumcount = +prompt('Сколько альбомов у певца?', '');
for (let i = 0; i < albumcount; i++) {
    albums.push(createAlbum());
}
console.log(albums);