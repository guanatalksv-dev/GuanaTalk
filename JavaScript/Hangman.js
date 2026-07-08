document.addEventListener("DOMContentLoaded", () => {

    const wordBank = [
        { word: "CHUCHO", hint: "The quintessential Salvadoran slang word for a dog." },
        { word: "CHIVO", hint: "An expression used to state that something is awesome, cool, or great." },
        { word: "CIPOTE", hint: "The traditional local word used to refer to a kid, child, or teenager." },
        { word: "PUPUSA", hint: "The most famous, thick, handmade corn tortilla stuffed with cheese or pork." },
        { word: "BAYUNCO", hint: "Used to describe someone who is acting silly, goofy, or making weird jokes." },
        { word: "BOLADO", hint: "A noun used to name anything" },
        { word: "CORA", hint: "Derived from the English word 'quarter', it means a 25-cent coin." }
    ];

    let selectedGame = {};
    let guessedLetters = [];
    let wrongLetters = [];
    let attemptsLeft = 6;
    let currentStreak = 0;

    const wordSpacesContainer = document.getElementById("word-spaces");
    const usedLettersContainer = document.getElementById("used-letters");
    const attemptsCountDisplay = document.getElementById("attempts-count");
    const attemptsBar = document.getElementById("attempts-bar");
    const hintTextDisplay = document.getElementById("hint-text");
    const streakDisplay = document.getElementById("streak-count");
    const keyboardButtons = document.querySelectorAll(".key-btn");
 
    const canvas = document.getElementById("hangmanCanvas");
    const ctx = canvas.getContext("2d");

    const resultModal = document.getElementById("resultModal");
    const resultModalTitle = document.getElementById("resultModalTitle");
    const resultModalMessage = document.getElementById("resultModalMessage");
    const resultModalWord = document.getElementById("resultModalWord");
    const resultModalBtn = document.getElementById("resultModalBtn");

    function initHangman() {
        selectedGame = wordBank[Math.floor(Math.random() * wordBank.length)];
        guessedLetters = [];
        wrongLetters = [];
        attemptsLeft = 6;

        hintTextDisplay.textContent = selectedGame.hint;
        attemptsCountDisplay.textContent = attemptsLeft;
        attemptsBar.style.width = "100%";
        streakDisplay.textContent = currentStreak;
        usedLettersContainer.textContent = "None yet";

        renderWordSpaces();
        drawHangmanScene(0); 

        keyboardButtons.forEach(btn => {
            btn.classList.remove("disabled");
        });
    }

    function renderWordSpaces() {
        wordSpacesContainer.innerHTML = "";
        const wordArray = selectedGame.word.split("");

        wordArray.forEach(letter => {
            const span = document.createElement("span");
            span.classList.add("letter-space");
            if (guessedLetters.includes(letter)) {
                span.textContent = letter;
            } else {
                span.textContent = "_";
            }
            wordSpacesContainer.appendChild(span);
        });
    }

    function handleLetterGuess(letter) {
        if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) return;

        if (selectedGame.word.includes(letter)) {
            guessedLetters.push(letter);
            renderWordSpaces();
            checkWinCondition();
        } else {
            wrongLetters.push(letter);
            attemptsLeft--;
            updateAttemptsUI();
            
            const errorsMade = 6 - attemptsLeft;
            drawHangmanScene(errorsMade);
            
            checkLoseCondition();
        }
    }

    function updateAttemptsUI() {
        attemptsCountDisplay.textContent = attemptsLeft;
        const percentage = (attemptsLeft / 6) * 100;
        attemptsBar.style.width = `${percentage}%`;

        if (wrongLetters.length > 0) {
            usedLettersContainer.textContent = wrongLetters.join(", ");
        }
    }

    function showResultModal(title, message, isWin) {
        resultModalTitle.textContent = title;
        resultModalMessage.textContent = message;
        resultModalWord.textContent = selectedGame.word;
        
        if (isWin) {
            resultModalTitle.style.color = "#00a4e4";
            resultModalBtn.textContent = "Next Wave 🏄‍♂️";
        } else {
            resultModalTitle.style.color = "#ff5500";
            resultModalBtn.textContent = "Try Again 🔄";
        }

        resultModal.style.display = "flex";
    }

    resultModalBtn.addEventListener("click", () => {
        resultModal.style.display = "none";
        initHangman();
    });

    function checkWinCondition() {
        const wordArray = selectedGame.word.split("");
        const isWon = wordArray.every(letter => guessedLetters.includes(letter));

        if (isWon) {
            currentStreak++;
            setTimeout(() => {
                showResultModal(
                    "🎉 Awesome!", 
                    "You guessed it! Your winning streak increased!", 
                    true
                );
            }, 300);
        }
    }

    function checkLoseCondition() {
        if (attemptsLeft === 0) {
            currentStreak = 0; 
            setTimeout(() => {
                showResultModal(
                    "😢 Game Over!", 
                    "Don't worry, catch the next wave!", 
                    false
                );
            }, 300);
        }
    }

    function drawHangmanScene(errors) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.fillStyle = "#e6c280";
        ctx.beginPath();
        ctx.arc(60, 245, 45, Math.PI, 0);
        ctx.fill();

        ctx.strokeStyle = "#9c6634";
        ctx.lineWidth = 22; 
        ctx.beginPath();
        ctx.moveTo(60, 215);
        ctx.quadraticCurveTo(55, 120, 115, 55);
        ctx.stroke();

        ctx.strokeStyle = "#7a4b22";
        ctx.lineWidth = 3;
        const trunkPoints = [
            {x1: 56, y1: 180, x2: 74, y2: 177},
            {x1: 54, y1: 140, x2: 73, y2: 135},
            {x1: 62, y1: 100, x2: 83, y2: 92},
            {x1: 80, y1: 70, x2: 100, y2: 62}
        ];
        trunkPoints.forEach(p => {
            ctx.beginPath(); ctx.moveTo(p.x1, p.y1); ctx.lineTo(p.x2, p.y2); ctx.stroke();
        });

        ctx.fillStyle = "#3ca85c";
        ctx.strokeStyle = "#2d8246";
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(115, 55);
        ctx.quadraticCurveTo(40, 30, 25, 75);
        ctx.quadraticCurveTo(55, 70, 115, 55);
        ctx.fill(); ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(115, 55);
        ctx.quadraticCurveTo(115, 10, 135, 5);
        ctx.quadraticCurveTo(140, 30, 115, 55);
        ctx.fill(); ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(115, 55);
        ctx.quadraticCurveTo(155, 40, 185, 70);
        ctx.quadraticCurveTo(150, 80, 115, 55);
        ctx.fill(); ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(115, 55);
        ctx.quadraticCurveTo(80, 20, 75, 35);
        ctx.quadraticCurveTo(95, 50, 115, 55);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#5c3a21";
        ctx.beginPath(); ctx.arc(102, 65, 9, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(116, 68, 8, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(110, 56, 8, 0, Math.PI * 2); ctx.fill();

        ctx.strokeStyle = "#d2b48c";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(165, 71);
        ctx.lineTo(165, 102);
        ctx.stroke();

        ctx.strokeStyle = "#333333";
        ctx.lineWidth = 4;

        if (errors >= 1) {
            ctx.beginPath();
            ctx.arc(165, 117, 15, 0, Math.PI * 2);
            ctx.stroke();
        }

        if (errors >= 2) {
            ctx.beginPath();
            ctx.moveTo(165, 132);
            ctx.lineTo(165, 177);
            ctx.stroke();
        }

        if (errors >= 3) {
            ctx.beginPath();
            ctx.moveTo(165, 142);
            ctx.lineTo(145, 157);
            ctx.stroke();
        }

        if (errors >= 4) {
            ctx.beginPath();
            ctx.moveTo(165, 142);
            ctx.lineTo(185, 157);
            ctx.stroke();
        }

        if (errors >= 5) {
            ctx.beginPath();
            ctx.moveTo(165, 177); ctx.lineTo(150, 212);
            ctx.moveTo(165, 177); ctx.lineTo(180, 212);
            ctx.stroke();
        }

        if (errors >= 6) {
            ctx.strokeStyle = "#ff4500"; 
            ctx.lineWidth = 7;
            ctx.beginPath();
            ctx.arc(165, 172, 14, 0, Math.PI * 2);
            ctx.stroke();
        }
    }

    keyboardButtons.forEach(button => {
        button.addEventListener("click", function() {
            const letter = this.textContent.trim().toUpperCase();
            this.classList.add("disabled");
            handleLetterGuess(letter);
        });
    });

    initHangman();

    const helpModal = document.getElementById("helpModal");
    const openModalBtn = document.querySelector(".help-btn");
    const closeModalBtn = document.getElementById("closeModal");

    openModalBtn.addEventListener("click", () => {
        helpModal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", () => {
        helpModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === helpModal) {
            helpModal.style.display = "none";
        }
    });
});