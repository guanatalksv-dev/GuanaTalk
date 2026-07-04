const TOTAL_PETALOS = 32;
const INTERVALO_FELICITACION = 5;

const bancoRiddles = [
    {
        en: "Salvadorans do not usually say 'Friend' or 'Dude'; they use this friendly word that starts with 'Ch'. What is it?",
        es: "Los salvadorenos no suelen decir 'Amigo'; usan esta palabra amistosa que empieza con 'Ch'. Cual es?",
        opciones: ["Chero", "Compadre", "Maje"],
        correcta: 0,
        hint: "It is one of the most common Salvadoran words for a close friend."
    },
    {
        en: "I am the most famous traditional food in El Salvador, made with corn or rice dough and filled with cheese, beans, or chicharron. What am I?",
        es: "Soy la comida tradicional mas famosa de El Salvador, hecha con masa de maiz o arroz y rellena de queso, frijoles o chicharron. Que soy?",
        opciones: ["Tamal", "Pupusa", "Pastelito"],
        correcta: 1,
        hint: "People usually eat it with curtido and tomato sauce."
    },
    {
        en: "When something is awesome, cool, or excellent, Salvadorans use this word that can also mean goat. What is it?",
        es: "Cuando algo es genial o excelente, los salvadorenos usan esta palabra que tambien puede significar cabra. Cual es?",
        opciones: ["Chivo", "Chucho", "Chispa"],
        correcta: 0,
        hint: "If someone says 'Que chivo', they liked it a lot."
    },
    {
        en: "In El Salvador, kids are often called by this everyday word that starts with 'C'. What is it?",
        es: "En El Salvador, a los niños muchas veces se les llama con esta palabra comun que empieza con 'C'. Cual es?",
        opciones: ["Chiquito", "Cipotes", "Chispos"],
        correcta: 1,
        hint: "Parents and grandparents use it all the time."
    },
    {
        en: "I am a playful boy from Salvadoran legends, short, magical, and famous for wearing a huge hat. Who am I?",
        es: "Soy un niño jugueton de las leyendas salvadoreñas, bajito, mágico y famoso por usar un sombrero enorme. Quién soy?",
        opciones: ["El Cadejo", "El Cipitio", "La Siguanaba"],
        correcta: 1,
        hint: "He is known for pranks and for throwing little stones."
    },
    {
        en: "I am a sweet bread often enjoyed with coffee in Salvadoran homes. What am I?",
        es: "Soy un pan dulce que muchas familias salvadoreñas disfrutan con café. Qué soy?",
        opciones: ["Semita", "Yuca", "Empanada"],
        correcta: 0,
        hint: "It can be filled with jam or panela."
    },
    {
        en: "I am a traditional drink made from roasted corn, cacao, and spices. What am I?",
        es: "Soy una bebida tradicional hecha con maiz tostado, cacao y especias. Qué soy?",
        opciones: ["Horchata", "Atol shuco", "Chilate"],
        correcta: 0,
        hint: "It is usually served cold and tastes sweet."
    },
    {
        en: "I am a national bird with bright colors and a long tail. What am I?",
        es: "Soy el ave nacional, con colores vivos y cola larga. Qué soy?",
        opciones: ["Torogoz", "Colibri", "Zanate"],
        correcta: 0,
        hint: "It is also called the turquoise-browed motmot."
    },
    {
        en: "I am the national flower of El Salvador, white and bell-shaped. What am I?",
        es: "Soy la flor nacional de El Salvador, blanca y con forma de campana. Qué soy?",
        opciones: ["Flor de izote", "Maquilishuat", "Flor de mayo"],
        correcta: 0,
        hint: "It grows from a plant with long pointed leaves."
    },
    {
        en: "I am a pink flowering tree that paints streets with petals. What am I?",
        es: "Soy un árbol de flores rosadas que llena las calles de petalos. Qué soy?",
        opciones: ["Maquilishuat", "Ceiba", "Conacaste"],
        correcta: 0,
        hint: "The falling petals in this game are inspired by this tree."
    },
    {
        en: "I am a volcano near San Salvador with a famous crater. What am I?",
        es: "Soy un volcán cerca de San Salvador con un crater famoso. Qué soy?",
        opciones: ["Volcan de San Salvador", "Chaparrastique", "Izalco"],
        correcta: 0,
        hint: "Many people call the crater El Boqueron."
    },
    {
        en: "I am a black dog or a white dog from Salvadoran legends who appears at night. What am I?",
        es: "Soy un perro negro o blanco de las leyendas salvadoreñas que aparece de noche. Qué soy?",
        opciones: ["El Cadejo", "El Cipitio", "El Duende"],
        correcta: 0,
        hint: "One version protects people, and the other scares them."
    },
    {
        en: "I am a legendary woman who looks beautiful from far away but frightening up close. Who am I?",
        es: "Soy una mujer legendaria que se ve bella de lejos pero da miedo de cerca. Quién soy?",
        opciones: ["La Siguanaba", "La Llorona", "La Cuyancua"],
        correcta: 0,
        hint: "She is said to appear near rivers and lonely roads."
    },
    {
        en: "I am a traditional toy that spins on the ground with a string. What am I?",
        es: "Soy un juguete tradicional que gira en el suelo con una cuerda. Qué soy?",
        opciones: ["Trompo", "Capirucho", "Chibola"],
        correcta: 0,
        hint: "You wrap it with string and throw it."
    },
    {
        en: "I am a traditional toy where you catch a wooden cup with a stick. What am I?",
        es: "Soy un juguete tradicional donde atrapas una pieza de madera con un palito. Qué soy?",
        opciones: ["Capirucho", "Piscucha", "Trompo"],
        correcta: 0,
        hint: "It takes patience and good aim."
    },
    {
        en: "I fly in the sky, tied to a string, and children love me on windy days. What am I?",
        es: "Vuelo en el cielo, amarrada a un hilo, y los ninos me aman en dias con viento. Qué soy?",
        opciones: ["Piscucha", "Chibola", "Cora"],
        correcta: 0,
        hint: "In other places, people call it a kite."
    },
    {
        en: "I am a small glass marble used in a traditional children's game. What am I?",
        es: "Soy una bolita de vidrio usada en un juego tradicional de niños. Qué soy?",
        opciones: ["Chibola", "Trompo", "Cachucha"],
        correcta: 0,
        hint: "Players try to hit other little glass balls."
    },
    {
        en: "I am a word Salvadorans use for a thing, object, matter, or situation. What am I?",
        es: "Soy una palabra que los salvadoreños usan para una cosa, objeto, asunto o situacion. Qué soy?",
        opciones: ["Bolado", "Bolo", "Bayunco"],
        correcta: 0,
        hint: "It is the word you use when you forget the exact name."
    },
    {
        en: "I am Salvadoran slang for a quarter coin, worth 25 cents. What am I?",
        es: "Soy una palabra salvadoreña para una moneda de 25 centavos. Qué soy?",
        opciones: ["Cora", "Ficha", "Peso"],
        correcta: 0,
        hint: "It sounds close to the English word 'quarter'."
    },
    {
        en: "I am a word for someone who is drunk. What am I?",
        es: "Soy una palabra para alguien que esta borracho. Qué soy?",
        opciones: ["Bolo", "Chero", "Chivo"],
        correcta: 0,
        hint: "People might say 'anda bolo'."
    },
    {
        en: "I am an exclamation used when something is gross or disgusting. What am I?",
        es: "Soy una expresión que se usa cuando algo da asco. Qué soy?",
        opciones: ["Guacala", "Puchica", "Quiubo"],
        correcta: 0,
        hint: "It is similar to saying 'yuck'."
    },
    {
        en: "I am an expression of surprise, frustration, or amazement. What am I?",
        es: "Soy una expresión de sorpresa, frustracion o asombro. Qué soy?",
        opciones: ["Puchica", "Mocoso", "Chilillo"],
        correcta: 0,
        hint: "It is softer than saying a bad word."
    },
    {
        en: "I am a common Salvadoran greeting that means something like 'What's up?' What am I?",
        es: "Soy un saludo comun salvadoreño que significa algo como 'Que pasa?'. Qué soy?",
        opciones: ["Que ondas", "Guacala", "Chindondo"],
        correcta: 0,
        hint: "Friends use it casually."
    },
    {
        en: "I am a bump on the head after a hit. What am I?",
        es: "Soy un bulto en la cabeza despues de un golpe. Qué soy?",
        opciones: ["Chindondo", "Cachucha", "Tamal"],
        correcta: 0,
        hint: "You might get one if you hit your head."
    },
    {
        en: "I am a word for a dog in El Salvador, and sometimes for someone stingy. What am I?",
        es: "Soy una palabra para perro en El Salvador, y a veces para alguien tacano. Qué soy?",
        opciones: ["Chucho", "Chivo", "Cipote"],
        correcta: 0,
        hint: "It can mean animal or personality, depending on context."
    }
];

const mensajesFelicitacion = [
    {
        min: 5,
        titulo: "You're doing great!",
        texto: "You've already gotten 5 correct. Your cultural memory is starting to strengthen."
    },
    {
        min: 10,
        titulo: "You're a true Chero!",
        texto: "10 correct answers. You're starting to think like a true Chero."
    },
    {
        min: 15,
        titulo: "El Maquilishuat is proud of you!",
        texto: "15 hits. The maquilishuat is dropping petals just for you."
    },
    {
        min: 20,
        titulo: "Almost a master!",
        texto: "20 correct answers. You're almost mastering the challenge."
    },
    {
        min: 25,
        titulo: "Master of the Guanaca!",
        texto: "Perfect score. You've earned the shadow of the maquilishuat."
    }
];

let indiceActual = 0;
let respuestasCorrectas = 0;
let respuestaCorrectaActual = null;
let felicitacionesMostradas = new Set();

document.addEventListener("DOMContentLoaded", () => {
    crearPetalosEfecto();
    cargarRiddle();
});

document.addEventListener("click", () => {
    cerrarInstrucciones();
});

function toggleInstrucciones(evento) {
    evento.stopPropagation();

    const popup = document.getElementById("instructions-popup");
    if (popup) {
        popup.classList.toggle("show");
    }
}

function cerrarInstrucciones() {
    const popup = document.getElementById("instructions-popup");

    if (popup && popup.classList.contains("show")) {
        popup.classList.remove("show");
    }
}

function crearPetalosEfecto() {
    const container = document.getElementById("leaves-container");
    if (!container) return;

    for (let i = 0; i < TOTAL_PETALOS; i++) {
        const petalo = document.createElement("div");
        const size = Math.random() * 12 + 8;

        petalo.classList.add("petal");
        petalo.style.width = `${size}px`;
        petalo.style.height = `${size + 4}px`;
        petalo.style.left = `${Math.random() * 100}%`;
        petalo.style.animationDuration = `${Math.random() * 6 + 7}s`;
        petalo.style.animationDelay = `${Math.random() * 6}s`;

        container.appendChild(petalo);
    }
}

function cargarRiddle() {
    const riddle = bancoRiddles[indiceActual];
    const opcionesMezcladas = mezclarOpciones(riddle);

    actualizarTextoRiddle(riddle);
    crearOpciones(opcionesMezcladas.map(opcion => opcion.texto));
    reiniciarPista();

    document.getElementById("next-btn").classList.add("hidden");
}

function mezclarOpciones(riddle) {
    const opcionesMezcladas = riddle.opciones
        .map((texto, indexOriginal) => ({ texto, indexOriginal }))
        .sort(() => Math.random() - 0.5);

    respuestaCorrectaActual = opcionesMezcladas.findIndex(opcion => opcion.indexOriginal === riddle.correcta);

    return opcionesMezcladas;
}

function actualizarTextoRiddle(riddle) {
    document.getElementById("riddle-number").innerText = `Riddle ${indiceActual + 1} of ${bancoRiddles.length}`;
    document.getElementById("riddle-text-es").innerText = riddle.es;
    document.getElementById("riddle-text-en").innerText = riddle.en;
}

function crearOpciones(opciones) {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    opciones.forEach((opcion, index) => {
        const boton = document.createElement("button");

        boton.classList.add("option-btn");
        boton.innerText = opcion;
        boton.onclick = () => evaluarOpcion(index, boton);

        optionsContainer.appendChild(boton);
    });
}

function reiniciarPista() {
    document.getElementById("hint-text").innerText = "Click the button below if you need a clue to solve this riddle!";
    document.getElementById("reveal-hint-btn").classList.remove("hidden");
}

function revelarPista() {
    const riddle = bancoRiddles[indiceActual];

    document.getElementById("hint-text").innerText = `Hint: ${riddle.hint}`;
    document.getElementById("reveal-hint-btn").classList.add("hidden");
}

function evaluarOpcion(indexElegido, botonElemento) {
    const todosLosBotones = document.querySelectorAll(".option-btn");

    todosLosBotones.forEach(btn => {
        btn.disabled = true;
    });

    if (indexElegido === respuestaCorrectaActual) {
        botonElemento.classList.add("correct");
        respuestasCorrectas++;
        revisarFelicitacion();
    } else {
        botonElemento.classList.add("incorrect");
        todosLosBotones[respuestaCorrectaActual].classList.add("correct");
    }

    document.getElementById("next-btn").classList.remove("hidden");
}

function revisarFelicitacion() {
    if (respuestasCorrectas % INTERVALO_FELICITACION !== 0) return;
    if (felicitacionesMostradas.has(respuestasCorrectas)) return;

    const mensaje = mensajesFelicitacion.find(item => item.min === respuestasCorrectas);
    if (!mensaje) return;

    felicitacionesMostradas.add(respuestasCorrectas);
    mostrarTarjetaFelicitacion(mensaje);
}

function mostrarTarjetaFelicitacion({ titulo, texto }) {
    const tarjeta = document.getElementById("streak-card");
    const tituloTarjeta = document.getElementById("streak-title");
    const textoTarjeta = document.getElementById("streak-text");

    if (!tarjeta || !tituloTarjeta || !textoTarjeta) return;

    tituloTarjeta.innerText = titulo;
    textoTarjeta.innerText = texto;
    tarjeta.classList.remove("hidden");

    window.clearTimeout(tarjeta.dataset.timeoutId);
    tarjeta.dataset.timeoutId = window.setTimeout(() => {
        tarjeta.classList.add("hidden");
    }, 3600);
}

function siguienteRiddle() {
    indiceActual++;

    if (indiceActual < bancoRiddles.length) {
        cargarRiddle();
        return;
    }

    mostrarResultadoFinal();
}

function mostrarResultadoFinal() {
    const modal = document.getElementById("result-modal");
    const emojiElement = document.getElementById("result-emoji");
    const titleElement = document.getElementById("result-title");
    const textElement = document.getElementById("result-text");

    document.getElementById("score-count").innerText = respuestasCorrectas;
    document.getElementById("total-count").innerText = bancoRiddles.length;

    if (respuestasCorrectas === bancoRiddles.length) {
        emojiElement.innerHTML = '<i class="fa-solid fa-crown"></i>';
        titleElement.innerText = "Sos un crack!";
        textElement.innerText = "Perfect score! You understand Salvadoran culture like a true local. Que chivo!";
    } else if (respuestasCorrectas >= 18) {
        emojiElement.innerHTML = '<i class="fa-solid fa-star"></i>';
        titleElement.innerText = "Great Job, Chero!";
        textElement.innerText = "Amazing effort! You are catching Salvadoran words, legends, and traditions beautifully.";
    } else {
        emojiElement.innerHTML = '<i class="fa-solid fa-dumbbell"></i>';
        titleElement.innerText = "Keep it up!";
        textElement.innerText = "Do not worry, local culture has many details. Try again and boost your Salvadoran knowledge.";
    }

    if (modal) {
        modal.classList.remove("hidden");
    }
}

function reiniciarJuego() {
    indiceActual = 0;
    respuestasCorrectas = 0;
    felicitacionesMostradas = new Set();

    const modal = document.getElementById("result-modal");
    const tarjeta = document.getElementById("streak-card");

    if (modal) {
        modal.classList.add("hidden");
    }

    if (tarjeta) {
        tarjeta.classList.add("hidden");
    }

    cargarRiddle();
}
