document.addEventListener("DOMContentLoaded", () => {
    const iconosDisponibles = [
        'fa-gamepad',      
        'fa-coffee',       
        'fa-cloud',        
        'fa-star',         
        'fa-heart',        
        'fa-bolt',         
        'fa-umbrella-beach',
        'fa-tree',         
        'fa-lightbulb',    
        'fa-music',        
        'fa-smile',        
        'fa-compass'      
    ];

    const bgContainer = document.createElement('div');
    bgContainer.id = 'doodles-background';
    document.body.appendChild(bgContainer);

    const cantidadIconos = 80; 

    for (let i = 0; i < cantidadIconos; i++) {
        const icono = document.createElement('i');
        const claseIconoAleatorio = iconosDisponibles[Math.floor(Math.random() * iconosDisponibles.length)];

        icono.classList.add('fa-solid', claseIconoAleatorio, 'doodle-icon');

        const posX = Math.random() * 100; 
        const posY = Math.random() * 100; 
 
        const tamano = Math.random() * (24 - 16) + 16; 
        const rotacion = Math.random() * 360; 

        icono.style.left = `${posX}%`;
        icono.style.top = `${posY}%`;
        icono.style.fontSize = `${tamano}px`;
        icono.style.transform = `rotate(${rotacion}deg)`;

        bgContainer.appendChild(icono);
    }
});