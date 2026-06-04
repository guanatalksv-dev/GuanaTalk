function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function guardarFavoritos(favoritos) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function toggleFavorito(nombre, boton) {

    let favoritos = obtenerFavoritos();

    if (favoritos.includes(nombre)) {

        favoritos = favoritos.filter(item => item !== nombre);

        boton.classList.remove("active");

    } else {

        favoritos.push(nombre);

        boton.classList.add("active");
    }

    guardarFavoritos(favoritos);
}



function mostrarFavoritos() {

    let contenedor = document.getElementById("favoritos-container");

    if (!contenedor) return;

    let favoritos = obtenerFavoritos();

    contenedor.innerHTML = "";

    favoritos.forEach(lugar => {

        contenedor.innerHTML += `
        
        <div class="favorito-item">
            <h2>${lugar}</h2>
        </div>

        `;
    });
}

mostrarFavoritos();