const rondasJuego = [
    { titulo: "Round 1: Salvadoran Slang", palabras: ["CHERO", "CHIVO", "BICHO", "MAJE", "CIPOTE"] },
    { titulo: "Round 2: Traditional Food", palabras: ["PUPUSA", "TAMAL", "PASTEL", "ATOLE", "YUCA"] },
    { titulo: "Round 3: Beautiful Towns", palabras: ["SUCHITOTO", "ATACO", "JUAYUA", "ILOBASCO", "APANECA"] },
    { titulo: "Round 4: Nature & Icons", palabras: ["TOROGOZ", "AMATE", "IZALCO", "ILOPANGO", "CHINCHONTEPEC"] },
    { titulo: "Round 5: Expressive Slang", palabras: ["PUCHICA", "BAYUNCO", "GUANACO", "CHOLINO", "TALAPO"] }
];

let rondaActual = 0;
const tamañoMatriz = 8;
let matrizJuego = [];
let palabrasEncontradasCount = 0;
let palabrasDeRonda = [];

let canvas, ctx;
let isDragging = false;
let startCell = null;
let currentCell = null;

document.addEventListener("DOMContentLoaded", () => {
    crearIconosFondo();
    initCanvas();
    cargarRonda(rondaActual);
});

function toggleInstrucciones(evento) {
    evento.stopPropagation();
    document.getElementById("instructions-popup").classList.toggle("show");
}
document.addEventListener("click", () => {
    document.getElementById("instructions-popup").classList.remove("show");
});

function initCanvas() {
    canvas = document.getElementById("selection-canvas");
    ctx = canvas.getContext("2d");
    
    const resizeCanvas = () => {
        const container = document.getElementById("grid-interaction-container");
        canvas.width = container.clientWidth - 24;
        canvas.height = container.clientHeight - 24;
    };
    window.addEventListener("resize", resizeCanvas);
    setTimeout(resizeCanvas, 150);

    canvas.addEventListener("mousedown", (e) => startSelection(e.offsetX, e.offsetY));
    canvas.addEventListener("mousemove", (e) => moveSelection(e.offsetX, e.offsetY));
    canvas.addEventListener("mouseup", () => endSelection());

    canvas.addEventListener("touchstart", (e) => {
        const rect = canvas.getBoundingClientRect();
        startSelection(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    });
    canvas.addEventListener("touchmove", (e) => {
        const rect = canvas.getBoundingClientRect();
        moveSelection(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    });
    canvas.addEventListener("touchend", () => endSelection());
}

function cargarRonda(indexRonda) {
    const ronda = rondasJuego[indexRonda];
    document.getElementById("round-title").innerText = ronda.titulo;
    document.getElementById("words-found-count").innerText = `Found: 0 / 5`;
    
    palabrasEncontradasCount = 0;
    palabrasDeRonda = ronda.palabras.map(p => p.replace(" ", "").substring(0, tamañoMatriz));

    const container = document.getElementById("words-container");
    container.innerHTML = "";
    palabrasDeRonda.forEach(palabra => {
        container.innerHTML += `<div class="word-item" id="word-item-${palabra}">🌿 ${palabra}</div>`;
    });

    matrizJuego = Array(tamañoMatriz).fill(null).map(() => Array(tamañoMatriz).fill(''));

    palabrasDeRonda.forEach(palabra => {
        let colocada = false;
        let intentos = 0;
        while (!colocada && intentos < 100) {
            const esHorizontal = Math.random() > 0.5;
            const fila = Math.floor(Math.random() * (esHorizontal ? tamañoMatriz : (tamañoMatriz - palabra.length + 1)));
            const col = Math.floor(Math.random() * (esHorizontal ? (tamañoMatriz - palabra.length + 1) : tamañoMatriz));

            if (validarEspacio(palabra, fila, col, esHorizontal)) {
                for (let i = 0; i < palabra.length; i++) {
                    if (esHorizontal) matrizJuego[fila][col + i] = palabra[i];
                    else matrizJuego[fila + i][col] = palabra[i];
                }
                colocada = true;
            }
            intentos++;
        }
    });

    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let f = 0; f < tamañoMatriz; f++) {
        for (let c = 0; c < tamañoMatriz; c++) {
            if (matrizJuego[f][c] === '') {
                matrizJuego[f][c] = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            }
        }
    }

    const gridContainer = document.getElementById("wordsearch-grid");
    gridContainer.innerHTML = "";
    for (let f = 0; f < tamañoMatriz; f++) {
        for (let c = 0; c < tamañoMatriz; c++) {
            const celda = document.createElement("div");
            celda.classList.add("grid-cell");
            celda.innerText = matrizJuego[f][c];
            celda.id = `cell-${f}-${c}`;
            gridContainer.appendChild(celda);
        }
    }
}

function validarEspacio(palabra, fila, col, esHorizontal) {
    for (let i = 0; i < palabra.length; i++) {
        const f = esHorizontal ? fila : fila + i;
        const c = esHorizontal ? col + i : col;
        if (matrizJuego[f][c] !== '' && matrizJuego[f][c] !== palabra[i]) return false;
    }
    return true;
}

function getCellFromCoords(x, y) {
    const celdaAncho = canvas.width / tamañoMatriz;
    const celdaAlto = canvas.height / tamañoMatriz;
    const col = Math.floor(x / celdaAncho);
    const fila = Math.floor(y / celdaAlto);
    if (fila >= 0 && fila < tamañoMatriz && col >= 0 && col < tamañoMatriz) {
        return { fila, col, id: `cell-${fila}-${col}` };
    }
    return null;
}

function startSelection(x, y) {
    isDragging = true;
    startCell = getCellFromCoords(x, y);
    currentCell = startCell;
    drawSelectionLine();
}

function moveSelection(x, y) {
    if (!isDragging || !startCell) return;
    const cell = getCellFromCoords(x, y);
    if (cell && (cell.fila === startCell.fila || cell.col === startCell.col)) {
        currentCell = cell;
        drawSelectionLine();
    }
}

// CALIBRACIÓN: Línea verde neón de alta visibilidad para que resalte sobre el fondo oscuro
function drawSelectionLine() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!startCell || !currentCell) return;

    const celdaAncho = canvas.width / tamañoMatriz;
    const celdaAlto = canvas.height / tamañoMatriz;

    const x1 = startCell.col * celdaAncho + celdaAncho / 2;
    const y1 = startCell.fila * celdaAlto + celdaAlto / 2;
    const x2 = currentCell.col * celdaAncho + celdaAncho / 2;
    const y2 = currentCell.fila * celdaAlto + celdaAlto / 2;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = celdaAncho * 0.65;
    ctx.strokeStyle = "rgba(0, 255, 148, 0.45)"; // Magnífico verde neón translúcido
    ctx.lineCap = "round";
    ctx.stroke();
}

function endSelection() {
    if (!isDragging) return;
    isDragging = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!startCell || !currentCell) return;

    let letras = [];
    let celdasAfectadas = [];

    const fInic = Math.min(startCell.fila, currentCell.fila);
    const fFin = Math.max(startCell.fila, currentCell.fila);
    const cInic = Math.min(startCell.col, currentCell.col);
    const cFin = Math.max(startCell.col, currentCell.col);

    if (startCell.fila === currentCell.fila) {
        for (let c = cInic; c <= cFin; c++) {
            letras.push(matrizJuego[startCell.fila][c]);
            celdasAfectadas.push(document.getElementById(`cell-${startCell.fila}-${c}`));
        }
    } else if (startCell.col === currentCell.col) {
        for (let f = fInic; f <= fFin; f++) {
            letras.push(matrizJuego[f][startCell.col]);
            celdasAfectadas.push(document.getElementById(`cell-${f}-${startCell.col}`));
        }
    }

    const palabraConstruida = letras.join("");
    const palabraInvertida = letras.reverse().join("");

    let palabraEncontrada = "";
    if (palabrasDeRonda.includes(palabraConstruida)) palabraEncontrada = palabraConstruida;
    else if (palabrasDeRonda.includes(palabraInvertida)) palabraEncontrada = palabraInvertida;

    if (palabraEncontrada !== "") {
        const itemLista = document.getElementById(`word-item-${palabraEncontrada}`);
        if (itemLista && !itemLista.classList.contains("found")) {
            itemLista.classList.add("found");
            itemLista.innerText = `✅ ${palabraEncontrada}`;

            celdasAfectadas.forEach(c => c.classList.add("found"));
            palabrasEncontradasCount++;
            document.getElementById("words-found-count").innerText = `Found: ${palabrasEncontradasCount} / 5`;

            if (palabrasEncontradasCount === 5) {
                setTimeout(() => dispararModalFinRonda(), 400);
            }
        }
    }
    startCell = null;
    currentCell = null;
}

function dispararModalFinRonda() {
    const modal = document.getElementById("result-modal");
    const titulo = document.getElementById("modal-title");
    const texto = document.getElementById("modal-text");
    const boton = document.getElementById("modal-btn");
    const divPuntaje = document.getElementById("modal-badge");

    if (rondaActual < rondasJuego.length - 1) {
        titulo.innerText = "¡Buen trabajo!";
        texto.innerText = "You have found all words for this level. Ready for the next ecosystem?";
        divPuntaje.innerText = `Cleared Level ${rondaActual + 1}`;
        boton.innerHTML = `Next Level <i class="fa-solid fa-arrow-right"></i>`;
    } else {
        titulo.innerText = "¡Sos un máster!";
        texto.innerText = "Amazing! You completed all 5 rounds and discovered all the hidden secrets of our nature and culture.";
        divPuntaje.innerText = "Game Completed! 🏆";
        boton.innerHTML = `Play Again <i class="fa-solid fa-rotate-right"></i>`;
    }
    modal.classList.remove("hidden");
}

function avanzarRonda() {
    document.getElementById("result-modal").classList.add("hidden");
    if (rondaActual < rondasJuego.length - 1) {
        rondaActual++;
        cargarRonda(rondaActual);
    } else {
        rondaActual = 0;
        cargarRonda(rondaActual);
    }
}

function crearIconosFondo() {
    const container = document.getElementById("leaves-container");
    const iconos = ["🍃", "🌿", "🌸", "🌺", "🌱"];
    for (let i = 0; i < 25; i++) {
        const elemento = document.createElement("div");
        elemento.classList.add("petal");
        elemento.innerText = iconos[Math.floor(Math.random() * iconos.length)];
        elemento.style.left = `${Math.random() * 100}%`;
        elemento.style.top = `${Math.random() * -20}px`;
        elemento.style.fontSize = `${Math.random() * 1.3 + 0.9}rem`;
        elemento.style.animationDuration = `${Math.random() * 5 + 5}s`;
        elemento.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(elemento);
    }
}