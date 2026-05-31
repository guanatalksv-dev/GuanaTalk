const wordBank = [
    { palabra: "CHERO", pista: "A friendly term used to mean a close friend, buddy, or homie." },
    { palabra: "CIPOTE", pista: "A typical Salvadoran word used to refer to a kid, child, or teenager." },
    { palabra: "PUPUSA", pista: "The most famous traditional Salvadoran thick handmade corn or rice tortilla." },
    { palabra: "CHIVO", pista: "A popular expression used when something is cool, awesome, or great." },
    { palabra: "BAYUNCO", pista: "Used to describe someone who acts silly, goofy, dramatic, or slightly rude." },
    { palabra: "CHORREADO", pista: "An adjective used when something is completely stained, dirty, or messy." },
    { palabra: "CHUCHO", pista: "The quintessential Salvadoran slang word for a dog." },
    { palabra: "PANDO", pista: "Used when something is crooked, unaligned, or when someone has bad luck." },
    { palabra: "CHAMBON", pista: "A person who does a job carelessly, poorly, or in a very lazy way." },
    { palabra: "BOLO", pista: "Slang used to describe someone who is completely drunk or intoxicated." }
];

const stickmanIds = ["p-head", "p-body", "p-armL", "p-armR", "p-legL", "p-legR"];
let hiddenWord = "";
let correctGuesses = [];
let wrongGuesses = [];
let currentStreak = 0; 
const maxLives = 6;

document.addEventListener("DOMContentLoaded", () => {
    initGame();
});

function initGame() {
    document.getElementById("game-over-modal").classList.remove("active");
    document.getElementById("streak-counter").innerText = currentStreak;

    const currentItem = wordBank[Math.floor(Math.random() * wordBank.length)];
    hiddenWord = currentItem.palabra;
    correctGuesses = [];
    wrongGuesses = [];

    document.getElementById("pista-texto").innerText = currentItem.pista;
    document.getElementById("used-letters-container").innerHTML = "";
    document.getElementById("attempts-text").innerText = maxLives;
    document.getElementById("progress-bar").style.width = "100%";

    stickmanIds.forEach(id => {
        document.getElementById(id).style.opacity = "0";
    });

    renderSlots();
    renderKeyboard();
}

function renderSlots() {
    const container = document.getElementById("word-slots-container");
    container.innerHTML = "";
    for (let char of hiddenWord) {
        const slot = document.createElement("div");
        slot.classList.add("slot-letter");
        slot.innerText = "_";
        container.appendChild(slot);
    }
}

function renderKeyboard() {
    const container = document.getElementById("keyboard-container");
    container.innerHTML = "";
    const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

    alphabet.forEach(letter => {
        const key = document.createElement("button");
        key.classList.add("btn-key");
        key.innerText = letter;
        key.onclick = () => handleInput(letter, key);
        container.appendChild(key);
    });
}

function handleInput(letter, element) {
    if (hiddenWord.includes(letter)) {
        element.classList.add("right");
        correctGuesses.push(letter);
        updateSlots();
        checkWin();
    } else {
        element.classList.add("wrong");
        wrongGuesses.push(letter);

        const partToReveal = stickmanIds[wrongGuesses.length - 1];
        if (partToReveal) {
            document.getElementById(partToReveal).style.opacity = "1";
        }

        updateStats();
        checkLose();
    }
}

function updateSlots() {
    const slots = document.getElementById("word-slots-container").getElementsByClassName("slot-letter");
    for (let i = 0; i < hiddenWord.length; i++) {
        if (correctGuesses.includes(hiddenWord[i])) {
            slots[i].innerText = hiddenWord[i];
        }
    }
}

function updateStats() {
    const currentLives = maxLives - wrongGuesses.length;
    document.getElementById("attempts-text").innerText = currentLives;
    
    const usedContainer = document.getElementById("used-letters-container");
    const charBadge = document.createElement("div");
    charBadge.classList.add("used-char");
    charBadge.innerText = wrongGuesses[wrongGuesses.length - 1];
    usedContainer.appendChild(charBadge);

    const percent = (currentLives / maxLives) * 100;
    document.getElementById("progress-bar").style.width = `${percent}%`;
}

function checkWin() {
    const hasWon = hiddenWord.split("").every(l => correctGuesses.includes(l));
    if (hasWon) {
        disableKeyboard();
        currentStreak++; 
        showEndModal(true);
    }
}

function checkLose() {
    if (wrongGuesses.length >= maxLives) {
        disableKeyboard();
        currentStreak = 0; 
        showEndModal(false);
    }
}

function showEndModal(isWin) {
    const modal = document.getElementById("game-over-modal");
    const icon = document.getElementById("modal-icon");
    const title = document.getElementById("modal-title");
    const msg = document.getElementById("modal-message");

    if (isWin) {
        icon.innerText = "🔥";
        title.innerText = "Excellent!";
        msg.innerText = `You won! Current streak: ${currentStreak} words in a row!`;
    } else {
        icon.innerText = "🥺";
        title.innerText = "What a mess! (¡Qué regada!)";
        msg.innerText = `The correct word was: ${hiddenWord}. Streak reset to 0.`;
    }

    modal.classList.add("active");
}

function disableKeyboard() {
    const keys = document.getElementsByClassName("btn-key");
    for (let k of keys) k.style.pointerEvents = "none";
}

function toggleHelpModal(open) {
    const modal = document.getElementById("help-modal");
    if (open) modal.classList.add("active");
    else modal.classList.remove("active");
}