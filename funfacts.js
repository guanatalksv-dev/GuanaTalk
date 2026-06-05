document.addEventListener('DOMContentLoaded', () => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const tarjetas = document.querySelectorAll('.card-container');

    tarjetas.forEach(tarjeta => {
        const estrella = tarjeta.querySelector('.character-fav-star') || 
                         tarjeta.querySelector('.card-back-action .character-fav-star') ||
                         tarjeta.querySelector('.card-back .character-fav-star');
        
        const h3 = tarjeta.querySelector('.card-front h3') || 
                   tarjeta.querySelector('h3') || 
                   tarjeta.querySelector('.card-back h3');
                   
        if (!h3) {
            console.warn("No se encontró ningún elemento h3 en esta tarjeta.");
            return; 
        }
        
        const id = "fact-" + h3.innerText.toLowerCase().trim().replace(/[^a-z0-9]/g, "");

        if (favoritos.some(item => item && item.id === id)) {
            if (estrella) estrella.classList.add('active');
        }

        if (estrella) {
            estrella.style.zIndex = "9999";
            estrella.style.position = "absolute";
            estrella.style.cursor = "pointer";

            estrella.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation(); 

                favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    favoritos = favoritos.filter(item => item && item.id !== id);
                    console.log(`Eliminado de favoritos: ${id}`);
                } else {
                    this.classList.add('active');
                    
                    if (!favoritos.some(item => item && item.id === id)) {
                        const img = tarjeta.querySelector('.card-front img') || 
                                    tarjeta.querySelector('img');
                                    
                        const desc = tarjeta.querySelector('.card-back p') || 
                                     tarjeta.querySelector('p') || 
                                     tarjeta.querySelector('.character-bio');

                        const nuevoFavorito = {
                            id: id,
                            type: "funfact",
                            title: h3.innerText.trim(),
                            img: img ? img.src : '',
                            description: desc ? desc.innerText.trim() : 'Símbolo Patrio de El Salvador'
                        };

                        favoritos.push(nuevoFavorito);
                        console.log("Guardado con éxito:", nuevoFavorito);
                    }
                }
                
                localStorage.setItem("favoritos", JSON.stringify(favoritos));
            });
        }
    });
});