const bancoRiddles = [
    {
        en: "Salvadorans don't usually say 'Friend' or 'Dude', they use this unique and friendly word starting with 'Ch'. What is it?",
        es: "Los salvadoreños no suelen decir 'Amigo', usan esta palabra única que empieza con 'Ch'. ¿Cuál es?",
        opciones: ["Chero", "Compadre", "Maje"],
        correcta: 0, 
        hint: "It is the ultimate Salvadoran slang for your best friend. You will hear it on every corner!"
    },
    {
        en: "I am the most famous traditional food in El Salvador, made of corn or rice dough and stuffed with cheese, beans, or chicharrón. What am I?",
        es: "Soy la comida tradicional más famosa de El Salvador, hecha de masa de maíz o arroz y rellena de queso, frijoles o chicharrón. ¿Qué soy?",
        opciones: ["Tamal", "Pupusa", "Pastelito"],
        correcta: 1, 
        hint: "We eat them with our hands, never with a fork! They are always accompanied by 'curtido' and tomato sauce."
    },
    {
        en: "When something is awesome, cool, or excellent, Salvadorans use this word that also means a type of goat. What is the word?",
        es: "Cuando algo es asombroso, genial o excelente, los salvadoreños usan esta palabra que también significa un tipo de cabra. ¿Cuál es?",
        opciones: ["Chivo", "Chucho", "Chispa"],
        correcta: 0, 
        hint: "If someone tells you '¡Qué chivo tu proyecto!', they are saying your project is amazing!"
    },
    {
        en: "If you visit El Salvador, you won't see 'children' or 'kids' playing in the park; you will see people calling them by this native word starting with 'C'. What is it?",
        es: "Si visitas El Salvador, no verás 'niños' jugando en el parque; verás a la gente llamándolos por esta palabra nativa que empieza con 'C'. ¿Cuál es?",
        opciones: ["Bichos", "Cipotes", "Chispos"],
        correcta: 1, 
        hint: "Derived from pipil roots, this word is used daily by moms and dads to call their little ones."
    },
    {
        en: "I am a magical and short mythological boy from Salvadoran legends who wears a huge hat and loves to eat ash. Who am I?",
        es: "Soy un niño mitológico mágico y bajo de las leyendas salvadoreñas que usa un sombrero enorme y le encanta comer ceniza. ¿Quién soy?",
        opciones: ["El Cadejo", "El Cipitío", "La Siguanaba"],
        correcta: 1,
        hint: "He is famous for being harmless but very playful, making funny pranks and throwing little stones at girls."
    }
];

let indiceActual = 0;
let respuestasCorrectas = 0; 

document.addEventListener("DOMContentLoaded", () => {
    crearPetalosEfecto();
    cargarRiddle();
});

function toggleInstrucciones(evento) {
    evento.stopPropagation(); 
    const popup = document.getElementById("instructions-popup");
    if (popup) {
        popup.classList.toggle("show");
    }
}

document.addEventListener("click", () => {
    const popup = document.getElementById("instructions-popup");
    if (popup && popup.classList.contains("show")) {
        popup.classList.remove("show");
    }
});

function crearPetalosEfecto() {
    const container = document.getElementById("leaves-container");
    if (!container) return;

    const totalPetalos = 25;
    for (let i = 0; i < totalPetalos; i++) {
        const petalo = document.createElement("div");
        petalo.classList.add("petal");
        
        const size = Math.random() * 12 + 8;
        petalo.style.width = `${size}px`;
        petalo.style.height = `${size + 4}px`;
        petalo.style.left = `${Math.random() * 100}%`;
        petalo.style.animationDuration = `${Math.random() * 6 + 6}s`;
        petalo.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(petalo);
    }
}

function cargarRiddle() {
    const data = bancoRiddles[indiceActual];
    
    document.getElementById("riddle-number").innerText = `Riddle ${indiceActual + 1} of ${bancoRiddles.length}`;
    
    const cajaTextoEs = document.getElementById("riddle-text-es");
    const cajaTextoEn = document.getElementById("riddle-text-en");
    
    cajaTextoEs.innerText = data.en; 
    cajaTextoEn.innerText = data.es; 
    
    document.getElementById("hint-text").innerText = "Click the button below if you need a clue to solve this riddle!";
    document.getElementById("reveal-hint-btn").classList.remove("hidden");

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    
    data.opciones.forEach((opcion, index) => {
        const boton = document.createElement("button");
        boton.classList.add("option-btn");
        boton.innerText = opcion;
        boton.setAttribute("onclick", `evaluarOpcion(${index}, this)`);
        optionsContainer.appendChild(boton);
    });

    document.getElementById("next-btn").classList.add("hidden");
}

function revelarPista() {
    const data = bancoRiddles[indiceActual];
    document.getElementById("hint-text").innerText = `💡 Hint: ${data.hint}`;
    document.getElementById("reveal-hint-btn").classList.add("hidden");
}

function evaluarOpcion(indexElegido, botonElemento) {
    const data = bancoRiddles[indiceActual];
    const todosLosBotones = document.querySelectorAll(".option-btn");

    todosLosBotones.forEach(btn => btn.disabled = true);

    if (indexElegido === data.correcta) {
        botonElemento.classList.add("correct");
        respuestasCorrectas++; 
    } else {
        botonElemento.classList.add("incorrect");
        todosLosBotones[data.correcta].classList.add("correct");
    }

    document.getElementById("next-btn").classList.remove("hidden");
}

function siguienteRiddle() {
    indiceActual++;
    if (indiceActual < bancoRiddles.length) {
        cargarRiddle();
    } else {
        const modal = document.getElementById("result-modal");
        const emojiElement = document.getElementById("result-emoji");
        const titleElement = document.getElementById("result-title");
        const textElement = document.getElementById("result-text");

        document.getElementById("score-count").innerText = respuestasCorrectas;
        document.getElementById("total-count").innerText = bancoRiddles.length;

        if (respuestasCorrectas === bancoRiddles.length) {
            emojiElement.innerText = "👑";
            titleElement.innerText = "¡Sos un crack!";
            textElement.innerText = "Perfect score! You officially understand Salvadoran culture like a true local. ¡Qué chivo!";
        } else if (respuestasCorrectas >= 3) {
            emojiElement.innerText = "✨";
            titleElement.innerText = "Great Job, Chero!";
            textElement.innerText = "Amazing effort! You are doing great catching up with our native words and traditions.";
        } else {
            emojiElement.innerText = "💪";
            titleElement.innerText = "Keep it up!";
            textElement.innerText = "Don't worry, local slang can be tricky at first! Try again to boost your Salvadoran vocabulary.";
        }

        if (modal) {
            modal.classList.remove("hidden");
        }
    }
}

function reiniciarJuego() {
    indiceActual = 0;
    respuestasCorrectas = 0;
    const modal = document.getElementById("result-modal");
    if (modal) {
        modal.classList.add("hidden");
    }
    cargarRiddle();
}