document.addEventListener('DOMContentLoaded', () => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const botonesEstrella = document.querySelectorAll('.card .fav-btn');

    botonesEstrella.forEach(boton => {
        const tarjeta = boton.closest('.card');
        if (!tarjeta) return;
        
        const id = tarjeta.getAttribute('data-id');
        if (!id) return;

        const estaEnFavoritos = favoritos.some(item => item && item.id === id);

        if (estaEnFavoritos) {
            boton.classList.add('active');
        } else {
            boton.classList.remove('active'); 
        }

        boton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

            if (this.classList.contains('active')) {
                this.classList.remove('active');
                favoritos = favoritos.filter(item => item && item.id !== id);
            } else {
                this.classList.add('active');
                
                const yaExiste = favoritos.some(item => item && item.id === id);

                if (!yaExiste) {
                    const titulo = tarjeta.querySelector('h3') ? tarjeta.querySelector('h3').innerText : '';
                    const imagen = tarjeta.querySelector('img') ? tarjeta.querySelector('img').src : '';
                    const audioSrc = tarjeta.querySelector('audio') ? tarjeta.querySelector('audio').src : '';
                    
                    const clasesTarjeta = Array.from(tarjeta.classList);
                    const bgClass = clasesTarjeta.find(c => ['pink', 'orange', 'lightpink', 'peach', 'peach2', 'orange2'].includes(c)) || 'pink';

                    favoritos.push({
                        id: id,
                        type: "word",
                        title: titulo,
                        img: imagen,
                        audio: audioSrc,
                        bgClass: bgClass
                    });
                }
            }

            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        });
    });
});