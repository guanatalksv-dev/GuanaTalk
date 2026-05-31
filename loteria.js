// CONTROL DISTRIBUIDO DE LAS 5 RONDAS CON TUS PALABRAS
const juegoCincoRondas = {
    ronda1: [
        { id: 1, palabra: "CIPOTE", pista: "¡Ese niño o muchacho travieso que pasa corriendo todo el día!", img: "img/cipote.png" },
        { id: 2, palabra: "EL CHERO", pista: "Tu buen amigo, el compadre fiel con el que sales a platicar.", img: "img/chero.png" },
        { id: 3, palabra: "PUCHICA", pista: "Expresión clásica de sorpresa, enojo o asombro absoluto.", img: "img/puchica.png" },
        { id: 4, palabra: "LA CACHUCHA", pista: "Forma cariñosa y muy local para llamar a la gorra.", img: "img/chachucha.png" },
        { id: 5, palabra: "CHORREADO", pista: "Algo que quedó completamente sucio, manchado o desarreglado.", img: "img/chorreado.png" },
        { id: 6, palabra: "BAYUNCO", pista: "Alguien bromista, payaso o que le gusta hacer chistes pesados.", img: "img/bayunco.png" }
    ],
    ronda2: [
        { id: 7, palabra: "BOLO", pista: "Aquel que se pasó de tragos y anda cantando feliz de la vida.", img: "img/bolo.png" },
        { id: 8, palabra: "LA CORA", pista: "La famosa moneda de veinticinco centavos que rinde para el pan dulce.", img: "img/cora.png" },
        { id: 9, palabra: "CAPIRUCHO", pista: "Juguete de madera con un palito donde debés ensartar la base.", img: "img/capirucho.png" },
        { id: 10, palabra: "GUANACA", pista: "La mujer orgullosamente salvadoreña, trabajadora y chispa.", img: "img/guanaca.png" },
        { id: 11, palabra: "BOLADO", pista: "La palabra universal: sirve para referirse a cualquier objeto o cosa.", img: "img/bolado.png" },
        { id: 12, palabra: "TAMAL", pista: "Masa de maíz rellena deliciosa, envuelta en hoja de plátano.", img: "img/tamal.png" }
    ],
    ronda3: [
        { id: 13, palabra: "SANGANO", pista: "Alguien sumamente haragán que evade cualquier tipo de trabajo.", img: "img/sangano.png" },
        { id: 14, palabra: "AGUADO", pista: "Sin ánimos, desinflado o algo que quedó con exceso de líquido.", img: "img/aguado.png" },
        { id: 15, palabra: "CHINDONDO", pista: "El tremendo chichón o bulto que te sale tras un golpe en la cabeza.", img: "img/chindondo.png" },
        { id: 16, palabra: "PASMADO", pista: "Persona distraída que se queda viendo al infinito sin reaccionar.", img: "img/pasmado.png" },
        { id: 17, palabra: "CHIVO", pista: "¡Excelente, genial, magnífico! Todo lo que está de maravilla.", img: "img/chivo.png" },
        { id: 18, palabra: "GUACALA", pista: "Expresión usada para denotar asco o desagrado inmediato.", img: "img/guacate.png" }
    ],
    ronda4: [
        { id: 19, palabra: "CHILILLO", pista: "Rama delgada o vara pequeña usada antiguamente para reprender.", img: "img/chilillo.png" },
        { id: 20, palabra: "MALANDRO", pista: "Un sujeto vago, de malas intenciones o que anda en malos pasos.", img: "img/malandro.png" },
        { id: 21, palabra: "COCHINO", pista: "Alguien desaseado o que tiene muy malos hábitos de limpieza.", img: "img/cochino.png" },
        { id: 22, palabra: "OSICO", pista: "Forma un tanto pesada de referirse a la boca de alguien.", img: "img/osico.png" },
        { id: 23, palabra: "PAJA", pista: "¡Mentira, exageración! Un cuento falso que nadie se cree.", img: "img/paja.png" }
    ],
    ronda5: [
        { id: 24, palabra: "QUIUBO", pista: "Saludo rápido e informal entre cheros al encontrarse en la calle.", img: "img/quiubo.png" },
        { id: 25, palabra: "QUE ONDAS", pista: "Otra forma clásica y juvenil para decir: ¿Cómo estás?", img: "img/queondas.png" },
        { id: 26, palabra: "IJOLE", pista: "Grito de exclamación cuando algo sale mal o te sorprende mucho.", img: "img/ijole.png" },
        { id: 27, palabra: "DUNDO", pista: "Alguien atolondrado, tonto o que anda medio adormecido.", img: "img/dundo.png" },
        { id: 28, palabra: "CHAMACO", pista: "Un muchacho, joven o adolescente de la colonia.", img: "img/chamaco.png" }
    ]
};

let rondaProgreso = 1;
let mazoActual = [];
let objetivoCantado = null;
let temporizadorEscritura = null; // Para limpiar animaciones previas

document.addEventListener("DOMContentLoaded", () => {
    construirRonda(rondaProgreso);
});

function construirRonda(numeroRonda) {
    const contenedor = document.getElementById("tablero-juego");
    const indicador = document.getElementById("ronda-badge");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    indicador.innerText = `RONDA ${numeroRonda} / 5`;

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
    // Limpiar cualquier efecto de máquina de escribir que haya quedado activo
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
    
    // Función corregida: Muestra todo el texto respetando los espacios al instante
    function escribirLetra() {
        if (index <= textoCompleto.length) {
            visor.innerText = textoCompleto.substring(0, index);
            index++;
            temporizadorEscritura = setTimeout(escribirLetra, 25);
        }
    }
    escribirLetra();
}

function verificarPresion(id, nodo) {
    if (objetivoCantado && id === objetivoCantado.id) {
        nodo.classList.add("marcada"); // Activa el frijol/marcador neón en CSS
        
        // CORREGIDO: Buscamos la carta y cambiamos su estado a marcada para avanzar
        const encontrada = mazoActual.find(c => c.id === id);
        if (encontrada) {
            encontrada.marcada = true;
        }

        // Espera un segundo para que el usuario vea el frijolito y lanza la otra frase
        setTimeout(() => {
            cantarSiguienteFrase();
        }, 1000);
    } else {
        // Efecto sacudida si se equivoca
        nodo.style.animation = "none";
        setTimeout(() => {
            nodo.style.animation = "errorShake 0.3s ease";
        }, 10);
    }
}

function avanzarEstructuraRonda() {
    if (rondaProgreso < 5) {
        alert(`¡Completaste la ronda ${rondaProgreso}! Presiona OK para cargar las siguientes palabras.`);
        rondaProgreso++;
        construirRonda(rondaProgreso);
    } else {
        document.getElementById("pista-texto").innerHTML = "🏆 ¡GANASTE EL JUEGO COMPLETO! 🏆<br>¡Sos un crack total del caliche salvadoreño!";
        alert("🎉 ¡Felicidades! Completaste las 5 rondas de GuanaTalk.");
    }
}

// CONTROL DE LAS INDICACIONES
function toggleIndicaciones(abrir) {
    const modal = document.getElementById("modal-ayuda");
    if (!modal) return;
    if (abrir) {
        modal.classList.add("active");
    } else {
        modal.classList.remove("active");
    }
}