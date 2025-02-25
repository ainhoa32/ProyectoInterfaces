document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));

    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
    
    
    const profesorAudio = document.getElementById('profesorAudio');
    const imagenProfesor = document.getElementById('imagenProfesor');
    
    imagenProfesor.addEventListener('click', () => {
        profesorAudio.currentTime = 0;
        profesorAudio.play();
    });
});

function toggleDesplegable(card) {
    const contenido = card.querySelector('.contenido');
    
    // Check if click is inside the content area
    const isClickInsideContent = event.target.closest('.contenido');
    
    // Only toggle if click is not inside content
    if (!isClickInsideContent) {
        contenido.classList.toggle('is-hidden');
    }
    
    // Stop event propagation
    event.stopPropagation();
}