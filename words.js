document.addEventListener('DOMContentLoaded', () => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const botonesEstrella = document.querySelectorAll('.card .fav-btn');

    botonesEstrella.forEach(boton => {
        const tarjeta = boton.closest('.card');
        if (!tarjeta) return;
        
        const id = tarjeta.getAttribute('data-id');
        if (!id) return;

        if (favoritos.includes(id)) {
            boton.classList.add('active');
        }

        boton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

            if (this.classList.contains('active')) {
                this.classList.remove('active');
                favoritos = favoritos.filter(item => {
                    if (item && item.id) return item.id !== id;
                    return item !== id;
                });
            } else {
                this.classList.add('active');
                if (!favoritos.includes(id)) {
                    favoritos.push(id);
                }
            }

            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        });
    });
});