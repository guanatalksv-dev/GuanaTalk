function iniciarBienvenida() {
    const quizScreen = document.getElementById("quiz-screen");
    const welcomeScreen = document.getElementById("welcome-screen");

    quizScreen.classList.add("hidden");

    setTimeout(() => {
        quizScreen.style.display = "none";
        welcomeScreen.classList.remove("hidden");
        ejecutarMaquinaDeEscribir();
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