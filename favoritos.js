function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function guardarFavoritos(favoritos) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function removerFavoritoDirecto(id) {
    let favoritos = obtenerFavoritos();
    favoritos = favoritos.filter(item => {
        if (item && item.id) {
            return item.id !== id;
        }
        return item !== id;
    });
    guardarFavoritos(favoritos);
    mostrarFavoritos(); 
}

function mostrarFavoritos() {
    let contenedor = document.getElementById("favoritos-container");
    if (!contenedor) return;

    let favoritos = obtenerFavoritos();
    contenedor.innerHTML = "";

    if (!favoritos || favoritos.length === 0) {
        contenedor.innerHTML = `<p style="text-align: center; color: #666; grid-column: 1/-1; margin-top: 50px; font-family: Arial, sans-serif; font-size: 1.2rem;">You haven't saved any favorites yet. Go back and tap the stars! ⭐</p>`;
        return;
    }

    const diccionarioPalabras = {
        bicho: { title: "Bicho/a", img: "img/bicho.png", audio: "audio/bicho.mp3", colorClass: "pink" },
        pulgarcito: { title: "Pulgarcito", img: "img/pulgarcito.png", audio: "audio/pulgarcito.mp3", colorClass: "orange" },
        apiate: { title: "Apiate", img: "img/apiate.png", audio: "audio/apiate.mp3", colorClass: "lightpink" },
        volado: { title: "Volado", img: "img/volado.png", audio: "audio/volado.mp3", colorClass: "peach" },
        canchita: { title: "Canchita", img: "img/canchita.png", audio: "audio/canchita.mp3", colorClass: "peach2" },
        chero: { title: "Chero/a", img: "img/chero.png", audio: "audio/chero.mp3", colorClass: "orange2" }
    };

    favoritos.forEach(item => {
        if (item && item.id) {
            let idLower = item.id.toLowerCase();
            
            if (item.isExtended) {
                contenedor.innerHTML += `
                <div class="extended-card" data-id="${item.id}">
                    <div class="extended-star-container">
                        <span class="character-fav-star active" onclick="removerFavoritoDirecto('${item.id}')">★</span>
                    </div>
                    <div class="extended-badge">${item.title}</div>
                    <div class="extended-scroll-box">
                        <div class="lyric-text">
                            ${item.description}
                        </div>
                    </div>
                </div>
                `;
            } 
            else if (idLower.includes('salarrue') || idLower.includes('claudia') || idLower.includes('espino') || idLower.includes('dalton') || idLower.includes('ayala') || idLower.includes('llort')) {
                let rol = item.subtitle;
                if (!rol) {
                    if (idLower.includes('salarrue')) rol = "Writer and Painter";
                    else if (idLower.includes('claudia')) rol = "Poet";
                    else if (idLower.includes('espino')) rol = "Poet";
                    else if (idLower.includes('dalton')) rol = "Poet and Writer";
                    else if (idLower.includes('ayala')) rol = "Social Activist";
                    else if (idLower.includes('llort')) rol = "Artist and Painter";
                    else rol = "Historical Figure";
                }

                let primerNombre = item.title.split(' ')[0].split('(')[0].trim();
                let rutaImagen = item.imgSrc || `img/${primerNombre.toLowerCase()}.png`;

                contenedor.innerHTML += `
                <div class="character-flip-card" data-id="${item.id}">
                    <div class="character-card-inner">
                        <div class="character-card-front">
                            <img src="${rutaImagen}" alt="${item.title}" class="flip-card-img">
                            <div class="front-info-overlay">
                                <h3>${item.title}</h3>
                                <p class="character-role">${rol}</p>
                                <span class="hover-hint">Hover to discover</span>
                            </div>
                        </div>
                        <div class="character-card-back">
                            <h3>${primerNombre}</h3>
                            <p class="character-bio">${item.description}</p>
                            <div class="character-fav-star-container">
                                <span class="character-fav-star active" onclick="removerFavoritoDirecto('${item.id}')">★</span>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            } 
            else {
                contenedor.innerHTML += `
                <div class="card-container" data-id="${item.id}">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="${item.imgSrc}" alt="${item.title}">
                            <h3>${item.title}</h3>
                            <p class="tap-hint"><i class="ri-hand-pointer-line"></i> Hover to discover</p>
                        </div>
                        <div class="card-back">
                            <h3>Did you know?</h3>
                            <p>${item.description}</p>
                            <div class="card-back-action">
                                <span class="character-fav-star active" onclick="removerFavoritoDirecto('${item.id}')">★</span>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }

        } else if (typeof item === 'string' && diccionarioPalabras[item]) {
            const data = diccionarioPalabras[item];
            contenedor.innerHTML += `
            <div class="card ${data.colorClass}" data-id="${item}">
                <button class="fav-btn active" onclick="removerFavoritoDirecto('${item}')">★</button>
                <img src="${data.img}" alt="${data.title}">
                <h3>${data.title}</h3>
                <audio controls>
                    <source src="${data.audio}" type="audio/mp3">
                </audio>
            </div>
            `;
        }
    });
}

mostrarFavoritos();