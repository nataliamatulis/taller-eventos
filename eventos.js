document.addEventListener('DOMContentLoaded', (event) => {
    const contenedor = document.querySelector('.contenedor');
    const boton = document.getElementById('myButton');

    contenedor.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
    
    boton.addEventListener('click', (event) => {
        
        event.stopPropagation();
        alert('¡Haz clic en el botón!');
    });

});