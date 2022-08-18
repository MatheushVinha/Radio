var dismute = document.querySelector('#dismute');
dismute.addEventListener('click', function() {
    const audio = document.querySelector('#audio')
    audio.muted = false
    
})

var mute = document.querySelector('#mute');
mute.addEventListener('click', function() {
    const audio = document.querySelector('#audio')
    audio.muted = true
})



