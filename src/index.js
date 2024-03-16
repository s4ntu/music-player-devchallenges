const audio = document.getElementById('audio');
const currentTime = document.getElementById('current-time');
const durationTime = document.getElementById('duration-time');
const progressBarBefore = document.querySelector('.music-player__progress-bar-progress');
const audioImage = document.getElementById('audio-image')
const title = document.getElementById('title')
const author = document.getElementById('author')

function reproduccion() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextAudio(){
    audio.src = './assets/forest-lullaby-110624.mp3';
    audio.play();
    title.textContent = 'Lost in the City Lights'
    author.textContent = 'Cosmo Sheldrake'
    audioImage.src='./assets/cover-2.png'

}

function beforeAudio(){
    audio.src = './assets/lost-in-city-lights-145038.mp3';
    audio.play();
    audioImage.src='./assets/cover-1.png'

    title.textContent = 'Forest Lullaby'
    author.textContent = 'Lesfm'

}

audio.addEventListener('timeupdate', function () {
    const tiempoTranscurrido = obtenerTiempoTranscurrido();
    currentTime.textContent = tiempoTranscurrido;
    const percentPlayed = (audio.currentTime / audio.duration) * 100;
    progressBarBefore.style.width = percentPlayed + '%';
});

audio.addEventListener('loadedmetadata', function () {
    durationTime.textContent = obtenerDuracionTotal();
});

function obtenerTiempoTranscurrido() {
    const segundos = Math.floor(audio.currentTime % 60); 
    const minutos = Math.floor(audio.currentTime / 60); 
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

function obtenerDuracionTotal() {
    const segundos = Math.floor(audio.duration % 60);
    const minutos = Math.floor(audio.duration / 60);
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

