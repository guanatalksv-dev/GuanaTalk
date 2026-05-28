const palabrasCaliches = [
    { palabra: "CIPOTE", pista: "Niño, muchacho o joven." },
    { palabra: "CHAMBÓN", pista: "Persona que hace las cosas mal o de forma descuidada." },
    { palabra: "CHANCLETA", pista: "Calzado ligero y cómodo para andar en casa." },
    { palabra: "GUANACO", pista: "Forma cariñosa y popular de llamar a un salvadoreño." },
    { palabra: "CHERO", pista: "Amigo, compañero o compadre." },
    { palabra: "CHUCHO", pista: "Tanto el perro de la casa como alguien tacaño." },
    { palabra: "PUPUSA", pista: "El plato nacional de El Salvador por excelencia." },
    { palabra: "YUCA", pista: "Algo que está sumamente difícil o complicado." },
    { palabra: "PACHANGA", pista: "Una buena fiesta o celebración alegre." }
];

let juegoActual = {};
let palabraOculta = [];
let letrasUsadas = [];
let intentosRestantes = 5;
const maxIntentos = 5;

const wordDisplay = document.getElementById("word-display");
const usedLettersContainer = document.getElementById("used-letters");
const attemptsText = document.getElementById("attempts");
const progressBar = document.getElementById("progress");
const keyboardContainer = document.getElementById("keyboard");

function iniciarJuego() {
    juegoActual = palabrasCaliches[Math.floor(Math.random() * palabrasCaliches.length)];

    palabraOculta = Array(juegoActual.palabra.length).fill("_");
    letrasUsadas = [];
    intentosRestantes = maxIntentos;

    console.log("Pista de la palabra: " + juegoActual.pista);
    actualizarInterfaz();
    generarTeclado();
    resetearDibujoAhorcado();
}

function actualizarInterfaz() {
    wordDisplay.innerHTML = "";
    palabraOculta.forEach(letra => {
        const span = document.createElement("span");
        span.textContent = letra === "_" ? "_" : letra;
        if (letra !== "_") span.classList.add("revealed"); // Clase por si quieres estilizar las reveladas
        wordDisplay.appendChild(span);
    });

    usedLettersContainer.innerHTML = "";
    letrasUsadas.forEach(letra => {
        const span = document.createElement("span");
        span.textContent = letra;
        usedLettersContainer.appendChild(span);
    });

    attemptsText.textContent = intentosRestantes;

    const porcentajeAncho = (intentosRestantes / maxIntentos) * 100;
    progressBar.style.width = `${porcentajeAncho}%`;
}

function generarTeclado() {
    keyboardContainer.innerHTML = "";
    const alfabeto = "ABCDEFGHIJKLMOPQRSTUVWXYZ".split("");

    alfabeto.forEach(letra => {
        const boton = document.createElement("button");
        boton.textContent = letra;
        
        boton.addEventListener("click", () => procesarIntento(letra, boton));
        keyboardContainer.appendChild(boton);
    });
}

function procesarIntento(letra, boton) {
    boton.disabled = true;

    if (juegoActual.palabra.includes(letra)) {
        for (let i = 0; i < juegoActual.palabra.length; i++) {
            if (juegoActual.palabra[i] === letra) {
                palabraOculta[i] = letra;
            }
        }
    } else {
        if (!letrasUsadas.includes(letra)) {
            letrasUsadas.push(letra);
            intentosRestantes--;
            mostrarParteCuerpo(maxIntentos - intentosRestantes);
        }
    }

    actualizarInterfaz();
    verificarFinDelJuego();
}

function mostrarParteCuerpo(fase) {
    const partes = {
        1: "h-head",
        2: "h-body",
        3: "h-arm-l",
        4: "h-arm-r",
        5: "h-leg-l"
    };

    const idParte = partes[fase];
    if (idParte) {
        const elemento = document.getElementById(idParte);
        if (elemento) elemento.style.opacity = "1";
    }
}

function resetearDibujoAhorcado() {
    const partesIds = ["h-head", "h-body", "h-arm-l", "h-arm-r", "h-leg-l", "h-leg-r"];
    partesIds.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) elemento.style.opacity = "0";
    });
}

function verificarFinDelJuego() {
    if (!palabraOculta.includes("_")) {
        setTimeout(() => {
            alert(`¡Excelente! Descubriste la palabra: ${juegoActual.palabra}.\nSignificado: ${juegoActual.pista}`);
            iniciarJuego();
        }, 300);
    }else if (intentosRestantes <= 0) {
        setTimeout(() => {
            alert(`¡Qué regada! Perdiste. La palabra era: ${juegoActual.palabra}.\nSignificado: ${juegoActual.pista}`);
            iniciarJuego();
        }, 300);
    }
}

window.onload = iniciarJuego;

function mostrarParteCuerpo(fase) {
    const partes = {
        1: ["h-head"],
        2: ["h-body"],
        3: ["h-arm-l"],
        4: ["h-arm-r"],
        5: ["h-leg-l", "h-leg-r"] 
    };

    const idsA_Mostrar = partes[fase];
    if (idsA_Mostrar) {
        idsA_Mostrar.forEach(id => {
            const elemento = document.getElementById(id);
            if (elemento) elemento.style.opacity = "1";
        });
    }
}