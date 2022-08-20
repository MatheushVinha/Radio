
function radio(playlist) {

    var img = document.querySelector('#img');
    var musica = document.querySelector('#musica');
    var autor = document.querySelector('#autor');
    var audio = document.querySelector('#audio');
    var background = document.querySelector('.blur__background');

    function start() {

        var musicas = {
        
            lista__musica: playlist.musicas_nome.Musica__lista,
    
            idMusica(lista) {
                var elemento = lista[Math.floor(Math.random() * lista.length)];
                return elemento
            },
        }
        
        var musica__atual = musicas.idMusica(musicas.lista__musica)
        console.log(musica__atual)
        autor.textContent = playlist[musica__atual].autor;
        musica.textContent = playlist[musica__atual].musica;
        audio.setAttribute('src', playlist[musica__atual].song);
        img.setAttribute('src', playlist[musica__atual].img);

        //background area    
        
        background.style.background =  `url(${playlist[musica__atual].img})`;
        background.style.backgroundRepeat = 'no-repeat';    
        background.style.backgroundSize = '130% 100%';
        background.style.filter = 'blur(2px)'

    }
    start()

    audio.addEventListener('ended', () => {     
        start()
        const audio = document.querySelector('#audio').play()
    })
}

radio(playlist)
