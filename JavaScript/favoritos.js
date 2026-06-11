document.addEventListener("DOMContentLoaded", () => {
    const favoritosContainer = document.getElementById("favoritos-container");
    
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    function renderFavoritos() {
        favoritosContainer.innerHTML = "";

        if (favoritos.length === 0) {
            favoritosContainer.innerHTML = `
                <div style="text-align: center; width: 100%; padding: 40px; color: #777;">
                    <i class="ri-star-line" style="font-size: 3rem; color: #ccc;"></i>
                    <p style="font-size: 1.2rem; margin-top: 10px;">Aún no tienes elementos guardados como favoritos.</p>
                </div>
            `;
            return;
        }

        favoritos.forEach(item => {
            if (item.type === "word") {
                const card = document.createElement("div");
                card.className = `card ${item.bgClass || 'pink'}`;
                card.innerHTML = `
                    <button class="fav-btn active" data-id="${item.id}" data-type="word">
                        <i class="ri-star-fill"></i>
                    </button>
                    <img src="${item.img}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <audio src="${item.audio}" controls></audio>
                `;
                favoritosContainer.appendChild(card);

            } else if (item.type === "character") {
                const card = document.createElement("div");
                card.className = "character-flip-card";
                card.setAttribute("data-id", item.id);
                
                const rutaImagen = item.img && !item.img.includes('undefined') ? item.img : 'img/salarrue.jpg'; 

                card.innerHTML = `
                    <div class="character-card-inner">
                        <!-- CARA FRONTAL -->
                        <div class="character-card-front">
                            <img src="${rutaImagen}" alt="${item.title}" class="flip-card-img">
                            <div class="front-info-overlay">
                                <h3>${item.title}</h3>
                                <p class="character-role">${item.role || ''}</p>
                                <span class="hover-hint">Hover to discover <i class="ri-arrow-turn-forward-line"></i></span>
                            </div>
                        </div>

                        
                        <div class="character-card-back" style="background-color: #ffffff !important; color: #333333 !important; display: flex !important; flex-direction: column !important; justify-content: space-between !important; align-items: center !important; position: relative !important; padding: 15px 10px !important; height: 100% !important; box-sizing: border-box !important;">
                            
                            
                            <div class="character-bio-content" style="width: 100% !important; text-align: center !important; margin-bottom: 40px !important;">
                                <h3 style="color: #0f4fa8 !important; margin: 0 0 4px 0 !important; font-size: 1.15rem !important; font-weight: 600 !important;">${item.title}</h3>
                                <p class="character-bio" style="color: #4f4f4f !important; font-size: 0.85rem !important; line-height: 1.4 !important; margin: 0 auto !important; text-align: center !important; max-height: 140px !important; overflow-y: auto !important;">${item.bio || item.description || ''}</p>
                            </div>
                            
                            
                           
                            <div class="character-fav-star-container" style="position: absolute !important; bottom: 15px !important; left: 50% !important; transform: translateX(-50%) !important; display: block !important; visibility: visible !important; opacity: 1 !important; z-index: 999 !important;">
                                <span class="character-fav-star active" data-id="${item.id}" data-type="character" style="color: #FFD700 !important; font-size: 24px !important; display: inline-block !important; visibility: visible !important;">
                                    <i class="ri-star-fill" style="color: #FFD700 !important; font-size: 24px !important; display: inline-block !important; visibility: visible !important;"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                favoritosContainer.appendChild(card);

            } else if (item.type === "funfact") {
                const card = document.createElement("div");
                card.className = "card-container";
                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="${item.img}" alt="${item.title}">
                            <h3>${item.title}</h3>
                            <span class="tap-hint">Girar <i class="ri-arrow-turn-forward-line"></i></span>
                        </div>
                        <div class="card-back">
                            <h3>${item.title}</h3>
                            <p>${item.description || ''}</p>
                            <div class="card-back-action">
                                <span class="character-fav-star active" data-id="${item.id}" data-type="funfact">
                                    <i class="ri-star-fill"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                favoritosContainer.appendChild(card);
            }
        });

        asignarEventosEliminar();
    }

    function asignarEventosEliminar() {
        const botonesEstrella = favoritosContainer.querySelectorAll(".fav-btn, .character-fav-star");
        
        botonesEstrella.forEach(boton => {
            boton.addEventListener("click", (e) => {
                e.stopPropagation(); 
                
                const id = boton.getAttribute("data-id");
                
                favoritos = favoritos.filter(item => item.id !== id);
                localStorage.setItem("favoritos", JSON.stringify(favoritos));
                
                const tarjetaContenedora = boton.closest(".card, .character-flip-card, .card-container");
                if (tarjetaContenedora) {
                    tarjetaContenedora.style.opacity = "0";
                    setTimeout(() => {
                        renderFavoritos();
                    }, 200);
                }
            });
        });
    }

    renderFavoritos();
});