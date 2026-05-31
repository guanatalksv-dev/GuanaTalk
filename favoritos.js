function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function guardarFavoritos(favoritos) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function removerFavoritoDirecto(id) {
    let favoritos = obtenerFavoritos();
    favoritos = favoritos.filter(item => (item.id ? item.id !== id : item !== id));
    guardarFavoritos(favoritos);
    mostrarFavoritos(); 
}

function mostrarFavoritos() {
    let contenedor = document.getElementById("favoritos-container");
    if (!contenedor) return;

    let favoritos = obtenerFavoritos();
    contenedor.innerHTML = "";

    if (favoritos.length === 0) {
        contenedor.innerHTML = `<p style="text-align: center; color: #666; grid-column: 1/-1; margin-top: 30px;">You haven't saved any favorites yet. Go back and tap the stars! ⭐</p>`;
        return;
    }

    favoritos.forEach(item => {
        if (item && item.id) {
            
            let idLower = item.id.toLowerCase();
            
            if (item.isExtended) {
                contenedor.innerHTML += `
                <div class="extended-card" data-id="${item.id}" style="position: relative; grid-column: 1 / -1; width: 100%; max-width: 800px; margin: 15px auto; background: white; border-radius: 20px; padding: 25px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #eef0f2; text-align: center;">
                    <div style="position: absolute; top: 20px; right: 25px; font-size: 2rem; cursor: pointer;">
                        <span class="character-fav-star active" onclick="removerFavoritoDirecto('${item.id}')">★</span>
                    </div>
                    <div class="extended-badge" style="background-color: #f1c40f; padding: 8px 25px; border-radius: 20px; color: white; font-size: 1.1rem; font-weight: bold; margin-bottom: 20px; display: inline-block;">${item.title}</div>
                    <div class="extended-scroll-box">
                        <div class="lyric-text" style="font-size: 1rem; line-height: 1.6; color: #444;">
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
                                <i class="ri-star-fill favorite-toggle" style="color: #f1c40f;" onclick="removerFavoritoDirecto('${item.id}')"></i>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }

        } else {
            contenedor.innerHTML += `
            <div class="favorito-item">
                <h2>${item}</h2>
            </div>
            `;
        }
    });
}

mostrarFavoritos();