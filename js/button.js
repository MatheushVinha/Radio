var play = document.querySelector('#mute');
play.addEventListener('click', function () {
    const audio = document.querySelector('#audio')
    audio.muted = false
    play.style.display = 'none';
    mute.style.display = 'block';
    audio.play()

})

var mute = document.querySelector('#play');
mute.addEventListener('click', function () {
    const audio = document.querySelector('#audio')
    audio.muted = true
    mute.style.display = 'none'
    play.style.display = 'block';
    audio.play()
})
