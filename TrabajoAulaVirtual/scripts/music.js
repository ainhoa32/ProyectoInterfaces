document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('backgroundMusic');
    const playAttempt = audioElement.play();

    if (playAttempt !== undefined) {
      playAttempt.then(() => {
        console.log('Audio reproduciendo automáticamente');
      }).catch(error => {
        console.log('Reproducción automática bloqueada por el navegador');
        const playButton = document.createElement('button');
        playButton.innerHTML = '<i class="fa fa-play"></i>';
        playButton.className = 'button is-small is-rounded boton-acceso';
        playButton.style.position = 'fixed';
        playButton.style.bottom = '20px';
        playButton.style.right = '20px';
        playButton.onclick = () => audioElement.play();
        document.body.appendChild(playButton);
      });
    }
});