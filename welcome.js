
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
 
        setTimeout(() => {

            wrapper.classList.add("fade-out-magic");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);

        }, 4000);

    }, 500); 
}

function ejecutarMaquinaDeEscribir() {
    const textoCompleto = "Welcome to GuanaTalk";
    const contenedorTexto = document.getElementById("typewriter-text");
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
    setTimeout(() => {
        window.location.href = "index.html";
    }, 4000);
}