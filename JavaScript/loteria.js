const juegoCincoRondas = {
    ronda1: [
        { id: 1, palabra: "CIPOTE", pista: "A typical Salvadoran word used to refer to a kid, child, or teenager.", img: "img/cipote.png" },
        { id: 2, palabra: "CHERO", pista: "Your close friend, buddy, or homie that you hang out with.", img: "img/chero-mini.png" },
        { id: 3, palabra: "PUCHICA", pista: "A very popular expression used to show surprise, frustration, or amazement.", img: "img/puchica.png" },
        { id: 4, palabra: "LA CACHUCHA", pista: "A very local, affectionate, and informal way to say 'cap' or 'hat'.", img: "img/cachucha.png" },
        { id: 5, palabra: "CHORREADO", pista: "An adjective used when something is completely stained, dirty, or messy.", img: "img/chorreado.png" },
        { id: 6, palabra: "BAYUNCO", pista: "Someone who acts like a clown, makes silly jokes, or behaves ridiculous.", img: "img/bayunco-mini.png" }
    ],
    ronda2: [
        { id: 7, palabra: "BOLO", pista: "A person who is completely drunk or intoxicated after drinking alcohol.", img: "img/bolo.png" },
        { id: 8, palabra: "LA CORA", pista: "The Salvadoran slang for a quarter coin (25 US cents). It comes from 'quarter'.", img: "img/lacora.png" },
        { id: 9, palabra: "CAPIRUCHO", pista: "A traditional wooden toy where you must catch a base using a small stick.", img: "img/capirucho.png" },
        { id: 10, palabra: "GUANACA", pista: "A proud, hardworking, and smart Salvadoran woman.", img: "img/guanaca.png" },
        { id: 11, palabra: "BOLADO", pista: "The universal word! It means 'thing' or 'object' when you forget its real name.", img: "img/bolado.png" },
        { id: 12, palabra: "TAMAL", pista: "A delicious traditional dish made of corn dough, stuffed and wrapped in banana leaves.", img: "img/tamales.png" }
    ],
    ronda3: [
        { id: 13, palabra: "SANGANO", pista: "A very lazy person who hates working and avoids any type of effort.", img: "img/sangano.png" },
        { id: 14, palabra: "AGUADO", pista: "Someone with no energy, or something that turned out too watery or soft.", img: "img/aguado.png" },
        { id: 15, palabra: "CHINDONDO", pista: "A bump or swelling on the head, usually caused by an accidental hit.", img: "img/chindondo.png" },
        { id: 16, palabra: "PASMADO", pista: "A distracted or clueless person who stares into space without reacting.", img: "img/pasmado.png" },
        { id: 17, palabra: "QUE CHIVO", pista: "Cool, awesome, or great! Used when something is excellent.", img: "img/que-chivo.png" },
        { id: 18, palabra: "GUACALA", pista: "An exclamation used to express disgust, yuck, or immediate dislike.", img: "img/guacala.png" }
    ],
    ronda4: [
        { id: 19, palabra: "CHILILLO", pista: "A thin branch or stick used in the past by parents for discipline.", img: "img/chilillo.png" },
        { id: 20, palabra: "MALANDRO", pista: "A shady person, thug, or someone who is involved in bad actions.", img: "img/malandro.png" },
        { id: 21, palabra: "COCHINO", pista: "A dirty or messy person with very poor hygiene habits.", img: "img/cochino.png" },
        { id: 22, palabra: "OSICO", pista: "A slightly rude or harsh way to refer to someone's mouth.", img: "img/osico.png" },
        { id: 23, palabra: "PAJA", pista: "A lie, fake story, or exaggeration that nobody believes.", img: "img/paja.png" }
    ],
    ronda5: [
        { id: 24, palabra: "QUIUBO", pista: "A fast, informal, and friendly greeting between friends. Short for '¿Qué hubo?'.", img: "img/quiubo.png" },
        { id: 25, palabra: "QUE ONDAS", pista: "A very popular and casual way to say: 'What's up?' or 'How is it going?'.", img: "img/queondas.png" },
        { id: 26, palabra: "IJOLE", pista: "An exclamation of surprise or worry when something goes wrong.", img: "img/ijole.png" },
        { id: 27, palabra: "DUNDO", pista: "Silly, goofy, or a bit slow to understand things.", img: "img/dundo.png" },
        { id: 28, palabra: "CHAMACO", pista: "A young boy, kid, or young man from the neighborhood.", img: "img/chamaco.png" }
    ]
};

let rondaProgreso = 1;
let mazoActual = [];
let objetivoCantado = null;
let temporizadorEscritura = null;

document.addEventListener("DOMContentLoaded", () => {
    construirRonda(rondaProgreso);
});

function construirRonda(numeroRonda) {
    const contenedor = document.getElementById("tablero-juego");
    const indicador = document.getElementById("ronda-badge");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    indicador.innerText = `ROUND ${numeroRonda} / 5`;

    let pool = juegoCincoRondas[`ronda${numeroRonda}`];
    mazoActual = [...pool].sort(() => Math.random() - 0.5);
    mazoActual.forEach(c => c.marcada = false);

    mazoActual.forEach((carta, i) => {
        const bloqueHTML = document.createElement("div");
        bloqueHTML.classList.add("card-artesanal");
        bloqueHTML.onclick = () => verificarPresion(carta.id, bloqueHTML);

        bloqueHTML.innerHTML = `
            <div class="card-number">#0${i + 1}</div>
            <div class="illustration-container">
                <img src="${carta.img}" alt="${carta.palabra}">
            </div>
            <span>${carta.palabra}</span>
        `;
        contenedor.appendChild(bloqueHTML);
    });

    cantarSiguienteFrase();
}

function cantarSiguienteFrase() {
    if (temporizadorEscritura) clearTimeout(temporizadorEscritura);

    const libres = mazoActual.filter(c => !c.marcada);
    
    if (libres.length === 0) {
        avanzarEstructuraRonda();
        return;
    }

    objetivoCantado = libres[Math.floor(Math.random() * libres.length)];
    
    const visor = document.getElementById("pista-texto");
    visor.innerText = "";
    
    let textoCompleto = objetivoCantado.pista;
    let index = 0;

    function escribirLetra() {
        if (index <= textoCompleto.length) {
            visor.innerText = textoCompleto.substring(0, index);
            index++;
            temporizadorEscritura = setTimeout(escribirLetra, 20);
        }
    }
    escribirLetra();
}

function verificarPresion(id, nodo) {
    if (objetivoCantado && id === objetivoCantado.id) {
        nodo.classList.add("marcada"); 
        
        const encontrada = mazoActual.find(c => c.id === id);
        if (encontrada) {
            encontrada.marcada = true;
        }

        setTimeout(() => {
            cantarSiguienteFrase();
        }, 1000);
    } else {
        nodo.style.animation = "none";
        setTimeout(() => {
            nodo.style.animation = "errorShake 0.3s ease";
        }, 10);
    }
}

function avanzarEstructuraRonda() {
    if (rondaProgreso < 5) {
        alert(`You completed Round ${rondaProgreso}! Press OK to load the next set of words.`);
        rondaProgreso++;
        construirRonda(rondaProgreso);
    } else {
        document.getElementById("pista-texto").innerHTML = "🏆 YOU WON THE ENTIRE GAME! 🏆<br>You are a true master of Salvadoran slang!";
        alert("🎉 Congratulations! You completed all 5 rounds of GuanaTalk.");
    }
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