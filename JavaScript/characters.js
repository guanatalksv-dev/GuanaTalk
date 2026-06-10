document.addEventListener('DOMContentLoaded', () => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const tarjetas = document.querySelectorAll('.character-flip-card');

    tarjetas.forEach(tarjeta => {
        const estrella = tarjeta.querySelector('.character-fav-star') || tarjeta.querySelector('.fa-star');
        
        const h3 = tarjeta.querySelector('h3');
        if (!h3) return;
        const id = "char-" + h3.innerText.toLowerCase().trim().replace(/[^a-z0-9]/g, "");

        if (favoritos.some(item => item && item.id === id)) {
            if (estrella) estrella.classList.add('active');
        }

        if (estrella) {
            estrella.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation(); 

                favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    favoritos = favoritos.filter(item => item && item.id !== id);
                } else {
                    this.classList.add('active');
                    
                    if (!favoritos.some(item => item && item.id === id)) {
                        const img = tarjeta.querySelector('img');
                        const roleOpt = tarjeta.querySelector('.character-role');
                        const bioOpt = tarjeta.querySelector('.character-bio') || tarjeta.querySelector('p');

                        favoritos.push({
                            id: id,
                            type: "character",
                            title: h3.innerText,
                            img: img ? img.src : '',
                            role: roleOpt ? roleOpt.innerText : 'Personaje Histórico',
                            bio: bioOpt ? bioOpt.innerText : ''
                        });
                    }
                }
                localStorage.setItem("favoritos", JSON.stringify(favoritos));
            });
        }
    });
});