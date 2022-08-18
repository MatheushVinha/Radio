
function radio(playlist) {

    var img = document.querySelector('#img');
    var musica = document.querySelector('#musica');
    var autor = document.querySelector('#autor');
    var audio = document.querySelector('#audio');

    function start() {

        var musicas = {
        
            lista__musica: playlist.musicas_nome.Musica__lista,
    
            idMusica(lista) {
                var elemento = lista[Math.floor(Math.random() * lista.length)];
                return elemento
            },
        }
        
        var musica__atual = musicas.idMusica(musicas.lista__musica)
        
        autor.textContent = playlist[musica__atual].autor;
        musica.textContent = playlist[musica__atual].musica;
        audio.setAttribute('src', playlist[musica__atual].song);
        img.setAttribute('src', playlist[musica__atual].img);
    }
    start()

    audio.addEventListener('ended', () => {     
        start()
    })

}

radio(playlist)








