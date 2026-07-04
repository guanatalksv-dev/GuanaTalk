const TOTAL_RONDAS = 5;
const VELOCIDAD_ESCRITURA_MS = 20;
const ESPERA_SIGUIENTE_PISTA_MS = 1000;

const juegoCincoRondas = {
    ronda1: [
        { id: 1, palabra: "CIPOTE", pista: "A common Salvadoran word for a kid, child, or young person.", img: "img/cipote.png" },
        { id: 2, palabra: "CHERO", pista: "A close friend, buddy, or pal you trust and hang out with.", img: "img/chero-mini.png" },
        { id: 3, palabra: "PUCHICA", pista: "A popular expression for surprise, frustration, or amazement.", img: "img/puchica.png" },
        { id: 4, palabra: "LA CACHUCHA", pista: "An informal way to say cap or hat.", img: "img/cachucha.png" },
        { id: 5, palabra: "CHORREADO", pista: "Something stained, splashed, or dripping with liquid.", img: "img/chorreado.png" },
        { id: 6, palabra: "BAYUNCO", pista: "Someone who acts vulgar, rude, silly, or without manners.", img: "img/bayunco-mini.png" }
    ],
    ronda2: [
        { id: 7, palabra: "BOLO", pista: "A person who is drunk after drinking alcohol.", img: "img/bolo.png" },
        { id: 8, palabra: "LA CORA", pista: "Salvadoran slang for a quarter coin, worth 25 US cents.", img: "img/lacora.png" },
        { id: 9, palabra: "CAPIRUCHO", pista: "A traditional wooden toy where you try to catch the stick inside the cup.", img: "img/capirucho.png" },
        { id: 10, palabra: "GUANACA", pista: "A Salvadoran woman; the feminine form of guanaco.", img: "img/guanaca.png" },
        { id: 11, palabra: "BOLADO", pista: "A very useful word for a thing, object, situation, or matter.", img: "img/bolado.png" },
        { id: 12, palabra: "TAMAL", pista: "A traditional dish made with corn dough, filling, and a leaf wrapper.", img: "img/tamales.png" }
    ],
    ronda3: [
        { id: 13, palabra: "ZANGANO", pista: "A very lazy person who avoids work or effort.", img: "img/sangano.png" },
        { id: 14, palabra: "AGUADO", pista: "Someone with no energy, or something that turned out too watery or soft.", img: "img/aguado.png" },
        { id: 15, palabra: "CHINDONDO", pista: "A bump or swelling on the head, usually caused by an accidental hit.", img: "img/chindondo.png" },
        { id: 16, palabra: "APIATE", pista: "A command telling someone to get off, get down, or move from where they are.", img: "img/apiate.png" },
        { id: 17, palabra: "QUE CHIVO", pista: "Cool, awesome, or great; used when something is excellent.", img: "img/que-chivo.png" },
        { id: 18, palabra: "GUACALA", pista: "An exclamation used to express disgust or dislike.", img: "img/guacala.png" }
    ],
    ronda4: [
        { id: 19, palabra: "CHILILLO", pista: "A thin branch or stick used in the past by parents for discipline.", img: "img/chilillo.png" },
        { id: 20, palabra: "MALANDRO", pista: "A shady person, troublemaker, or someone involved in bad actions.", img: "img/malandro.png" },
        { id: 21, palabra: "COCHINO", pista: "A dirty, messy, or unhygienic person.", img: "img/cochino.png" },
        { id: 22, palabra: "CHUCHO", pista: "A common Salvadoran word for a dog; it can also describe someone stingy.", img: "img/chucho.png" },
        { id: 23, palabra: "PAJA", pista: "A lie, fake story, excuse, or exaggeration.", img: "img/paja.png" }
    ],
    ronda5: [
        { id: 24, palabra: "QUIUBO", pista: "A fast, informal greeting between friends. Short for 'Que hubo?'.", img: "img/quiubo.png" },
        { id: 25, palabra: "QUE ONDAS", pista: "A casual way to say 'What's up?' or ask how things are going.", img: "img/queondas.png" },
        { id: 26, palabra: "IJOLE", pista: "An exclamation of surprise, worry, or disappointment.", img: "img/ijole.png" },
        { id: 27, palabra: "MOCOSO", pista: "A young kid, often said in a teasing way like 'snot-nosed kid'.", img: "img/mocoso.png" },
        { id: 28, palabra: "CHAMACO", pista: "A kid, young boy, or young person.", img: "img/chamaco.png" }
    ]
};

let rondaProgreso = 1;
let mazoActual = [];
let objetivoCantado = null;
let temporizadorEscritura = null;
let accionResultado = null;

document.addEventListener("DOMContentLoaded", () => {
    construirRonda(rondaProgreso);
});

function construirRonda(numeroRonda) {
    const contenedor = document.getElementById("tablero-juego");
    const indicador = document.getElementById("ronda-badge");

    if (!contenedor) return;

    contenedor.innerHTML = "";
    indicador.innerText = `ROUND ${numeroRonda} / ${TOTAL_RONDAS}`;

    const pool = juegoCincoRondas[`ronda${numeroRonda}`];
    mazoActual = mezclarCartas(pool).map(carta => ({ ...carta, marcada: false }));

    mazoActual.forEach((carta, index) => {
        const bloqueHTML = crearCartaHTML(carta, index);
        contenedor.appendChild(bloqueHTML);
    });

    cantarSiguienteFrase();
}

function crearCartaHTML(carta, index) {
    const bloqueHTML = document.createElement("div");
    bloqueHTML.classList.add("card-artesanal");
    bloqueHTML.onclick = () => verificarPresion(carta.id, bloqueHTML);

    bloqueHTML.innerHTML = `
        <div class="card-number">#0${index + 1}</div>
        <div class="illustration-container">
            <img src="${carta.img}" alt="${carta.palabra}">
        </div>
        <span>${carta.palabra}</span>
    `;

    return bloqueHTML;
}

function cantarSiguienteFrase() {
    if (temporizadorEscritura) clearTimeout(temporizadorEscritura);

    const libres = mazoActual.filter(carta => !carta.marcada);

    if (libres.length === 0) {
        avanzarEstructuraRonda();
        return;
    }

    objetivoCantado = libres[Math.floor(Math.random() * libres.length)];
    escribirPista(objetivoCantado.pista);
}

function escribirPista(textoCompleto) {
    const visor = document.getElementById("pista-texto");
    let index = 0;

    visor.innerText = "";

    function escribirLetra() {
        if (index <= textoCompleto.length) {
            visor.innerText = textoCompleto.substring(0, index);
            index++;
            temporizadorEscritura = setTimeout(escribirLetra, VELOCIDAD_ESCRITURA_MS);
        }
    }

    escribirLetra();
}

function verificarPresion(id, nodo) {
    if (objetivoCantado && id === objetivoCantado.id) {
        marcarCarta(id, nodo);
        setTimeout(cantarSiguienteFrase, ESPERA_SIGUIENTE_PISTA_MS);
        return;
    }

    mostrarError(nodo);
}

function marcarCarta(id, nodo) {
    const encontrada = mazoActual.find(carta => carta.id === id);

    nodo.classList.add("marcada");

    if (encontrada) {
        encontrada.marcada = true;
    }
}

function mostrarError(nodo) {
    nodo.style.animation = "none";

    setTimeout(() => {
        nodo.style.animation = "errorShake 0.3s ease";
    }, 10);
}

function avanzarEstructuraRonda() {
    if (rondaProgreso < TOTAL_RONDAS) {
        const siguienteRonda = rondaProgreso + 1;

        mostrarResultadoRonda({
            etiqueta: `ROUND ${rondaProgreso} COMPLETE`,
            titulo: "Felicidades",
            mensaje: `Has pasado a la ronda ${siguienteRonda}.`,
            textoBoton: "Continuar",
            accion: () => {
                rondaProgreso = siguienteRonda;
                construirRonda(rondaProgreso);
            }
        });
        return;
    }

    document.getElementById("pista-texto").innerHTML = "YOU WON THE ENTIRE GAME!<br>You are a true master of Salvadoran slang!";

    mostrarResultadoRonda({
        etiqueta: "GUANATALK MASTER",
        titulo: "Ganaste",
        mensaje: `Completaste las ${TOTAL_RONDAS} rondas de la loteria.`,
        textoBoton: "Jugar otra vez",
        accion: () => {
            rondaProgreso = 1;
            construirRonda(rondaProgreso);
        }
    });
}

function mostrarResultadoRonda({ etiqueta, titulo, mensaje, textoBoton, accion }) {
    const modal = document.getElementById("modal-resultado");
    const badge = document.querySelector(".resultado-badge");
    const tituloModal = document.getElementById("resultado-titulo");
    const mensajeModal = document.getElementById("resultado-mensaje");
    const botonModal = document.getElementById("resultado-boton");

    if (!modal || !badge || !tituloModal || !mensajeModal || !botonModal) {
        accion();
        return;
    }

    accionResultado = accion;
    badge.innerText = etiqueta;
    tituloModal.innerText = titulo;
    mensajeModal.innerText = mensaje;
    botonModal.innerText = textoBoton;
    modal.classList.add("active");
}

function aceptarResultadoRonda() {
    const modal = document.getElementById("modal-resultado");
    const accionPendiente = accionResultado;

    accionResultado = null;

    if (modal) {
        modal.classList.remove("active");
    }

    if (accionPendiente) {
        accionPendiente();
    }
}

function mezclarCartas(cartas) {
    return [...cartas].sort(() => Math.random() - 0.5);
}

function toggleIndicaciones(abrir) {
    const modal = document.getElementById("modal-ayuda");

    if (!modal) return;

    if (abrir) {
        modal.classList.add("active");
    } else {
        modal.classList.remove("active");
    }
}
