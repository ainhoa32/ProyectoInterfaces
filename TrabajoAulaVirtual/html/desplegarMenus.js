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
});

function toggleDesplegable(elemento) {
    elemento.classList.toggle("is-active");
    const contenido = elemento.querySelector('.contenido');
    contenido.classList.toggle("is-hidden");
}