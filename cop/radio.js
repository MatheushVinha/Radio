
function radio(playlist) {

    var musicas = {

        lista__musica: playlist.musicas_nome.Musica__lista,

        idMusica(lista) {
            var elemento = lista[Math.floor(Math.random() * lista.length)];
            return elemento
        }

    }
    var musica__atual = musicas.idMusica(musicas.lista__musica)

    var img = document.querySelector('#img');
    var musica = document.querySelector('#musica');
    var autor = document.querySelector('#autor');
    var audio = document.querySelector('#audio');

    function start() {
        
        autor.textContent = playlist[musicas.idMusica(musicas.lista__musica)].autor;
        musica.textContent = playlist[musicas.idMusica(musicas.lista__musica)].musica;
        audio.setAttribute('src', playlist[musicas.idMusica(musicas.lista__musica)].song);
        img.setAttribute('src', playlist[musicas.idMusica(musicas.lista__musica)].img);
    }
    start()

    audio.addEventListener('ended', () => {
        start()
    })

}

radio(playlist)








