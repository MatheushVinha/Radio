
import {playlist} from './script.js';

function gerar() {   
    return Math.floor(playlist.length* Math.random())
}

function radio(playlist) {
    var musicaEscolhida = gerar();

    var link = document.querySelector('#link');
    link.setAttribute('src', playlist[musicaEscolhida].link)
    
    var musica = document.querySelector('#musica');
    musica.textContent = playlist[musicaEscolhida].musica;
    
    var autor = document.querySelector('#autor');
    autor.textContent = playlist[musicaEscolhida].autor;
}

radio(playlist)

console.log(gerar())

