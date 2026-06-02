document.addEventListener("DOMContentLoaded", () => {
    const contenedorParticulas = document.getElementById("particles-layer");
    if (!contenedorParticulas) return;

    const cantidadParticulas = 35; 

    for (let i = 0; i < cantidadParticulas; i++) {
        const particula = document.createElement("div");
        particula.classList.add("particle");

        if (Math.random() > 0.6) {
            particula.classList.add("yellowish");
        }

        particula.style.left = `${Math.random() * 100}%`;

        const dimension = Math.random() * 8 + 6; 
        particula.style.width = `${dimension}px`;
        particula.style.height = `${dimension}px`;

        particula.style.animationDuration = `${Math.random() * 5 + 5}s`; 
        particula.style.animationDelay = `${Math.random() * 6}s`;

        contenedorParticulas.appendChild(particula);
    }
});

function iniciarBienvenida() {
    const wrapper = document.getElementById("intro-wrapper");
    const quizScreen = document.getElementById("quiz-screen");
    const welcomeScreen = document.getElementById("welcome-screen");
 
    quizScreen.classList.add("hidden");
    
    setTimeout(() => {
        quizScreen.style.display = "none"; 
        welcomeScreen.classList.remove("hidden");
 
        ejecutarMaquinaDeEscribir();

        // 1. CREAR EL TELÓN HALFTONE EXACTO DE TU IMAGEN
        let halftoneOverlay = document.getElementById("halftone-overlay");
        if (!halftoneOverlay) {
            halftoneOverlay = document.createElement("div");
            halftoneOverlay.id = "halftone-overlay";
            // Inyectamos un patrón SVG real para que los círculos tengan el degradado de tamaño idéntico a tu ejemplo
            halftoneOverlay.innerHTML = `
                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="halftone-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="white" />
                            <stop offset="100%" stop-color="black" />
                        </linearGradient>
                        <mask id="halftone-mask">
                            <rect width="100%" height="100%" fill="url(#halftone-grad)" />
                        </mask>
                    </defs>
                </svg>
            `;
            document.body.appendChild(halftoneOverlay);
        }

        // 2. PASADOS 3.0 SEGUNDOS: Iniciamos el barrido de disolución por puntos
        setTimeout(() => {
            document.body.classList.add("halftone-dissolving");
        }, 3000);

        // 3. PASADOS 4.2 SEGUNDOS: Redirección limpia al Home
        setTimeout(() => {
            window.location.href = "index.html";
        }, 4200);

    }, 500); 
}

function ejecutarMaquinaDeEscribir() {
    const textoCompleto = "Welcome to GuanaTalk";
    const contenedorTexto = document.getElementById("typewriter-text");
    if (!contenedorTexto) return;
    
    let indice = 0;
    
    function escribir() {
        if (indice < textoCompleto.length) {
            if (textoCompleto.substring(indice, indice + 9) === "GuanaTalk") {
                contenedorTexto.innerHTML += `<span style="color: #4cd137;">GuanaTalk</span>`;
                indice += 9;
            } else {
                contenedorTexto.innerHTML += textoCompleto.charAt(indice);
                indice++;
            }
            setTimeout(escribir, 70); 
        }
    }
    escribir();
}