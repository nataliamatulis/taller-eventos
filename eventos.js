document.addEventListener('DOMContentLoaded', (event) => {
    const contenedor = document.querySelector('.contenedor');
    const boton = document.getElementById('myButton');

    contenedor.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });

    contenedor.addEventListener('click', () => {
        alert('¡Hola! Soy el div');
    });

    // Manejador de eventos para el botón
    boton.addEventListener('click', (event) => {
        // Detener la propagación del evento
        event.stopPropagation();
        alert('¡Haz clic en el botón!');
    });
    
});