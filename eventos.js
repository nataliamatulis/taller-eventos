document.addEventListener('DOMContentLoaded', (event) => {
    const contenedor = document.querySelector('.contenedor');

    contenedor.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
});