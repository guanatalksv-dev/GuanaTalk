document.addEventListener("DOMContentLoaded", () => {

    const roundsData = {
        1: [
            { id: 1, name: "Chivo", type: "slang", content: "CHIVO", img: "img/chivo.png" },
            { id: 1, name: "Chivo", type: "meaning", content: "Cool / Awesome", img: "img/meaning_cool.png" },
            { id: 2, name: "Chero", type: "slang", content: "CHERO", img: "img/chero.png" },
            { id: 2, name: "Chero", type: "meaning", content: "Friend / Pal", img: "img/meaning_friend.png" },
            { id: 3, name: "Cipote", type: "slang", content: "CIPOTE", img: "img/cipote.png" },
            { id: 3, name: "Cipote", type: "meaning", content: "Child / Kid", img: "img/meaning_kid.png" },
            { id: 4, name: "Puchica", type: "slang", content: "PÚCHICA", img: "img/puchica.png" },
            { id: 4, name: "Puchica", type: "meaning", content: "Geez! / Wow!", img: "img/meaning_wow.png" }
        ],
        2: [
            { id: 5, name: "Bayunco", type: "slang", content: "BAYUNCO", img: "img/bayunco.png" },
            { id: 5, name: "Bayunco", type: "meaning", content: "Silly / Goofy", img: "img/meaning_silly.png" },
            { id: 6, name: "Maje", type: "slang", content: "MAJE", img: "img/maje.png" },
            { id: 6, name: "Maje", type: "meaning", content: "Dude / Guy", img: "img/meaning_dude.png" },
            { id: 7, name: "Pupusas", type: "slang", content: "PUPUSAS", img: "img/pupusas.png" },
            { id: 7, name: "Pupusas", type: "meaning", content: "National Dish", img: "img/meaning_food.png" },
            { id: 8, name: "Vaya Pues", type: "slang", content: "VAYA PUES", img: "img/vayapues.png" },
            { id: 8, name: "Vaya Pues", type: "meaning", content: "Alright / OK", img: "img/meaning_ok.png" }
        ],
        3: [
            { id: 9, name: "Guanaco", type: "slang", content: "GUANACO", img: "img/guanaco.png" },
            { id: 9, name: "Guanaco", type: "meaning", content: "Salvadoran person", img: "img/meaning_person.png" },
            { id: 10, name: "Diaybo", type: "slang", content: "DIAYBO", img: "img/diaybo.png" },
            { id: 10, name: "Diaybo", type: "meaning", content: "Clever / Sharp", img: "img/meaning_sharp.png" },
            { id: 11, name: "Juela", type: "slang", content: "JUELA", img: "img/juela.png" },
            { id: 11, name: "Juela", type: "meaning", content: "Short for Hijole!", img: "img/meaning_shock.png" },
            { id: 12, name: "Chuco", type: "slang", content: "CHUCO", img: "img/chuco.png" },
            { id: 12, name: "Chuco", type: "meaning", content: "Dirty / Fermented", img: "img/meaning_dirty.png" }
        ],
        4: [
            { id: 13, name: "Pana", type: "slang", content: "PANA", img: "img/pana.png" },
            { id: 13, name: "Pana", type: "meaning", content: "Plastic Bowl", img: "img/meaning_bowl.png" },
            { id: 14, name: "Chucho", type: "slang", content: "CHUCHO", img: "img/chucho.png" },
            { id: 14, name: "Chucho", type: "meaning", content: "Dog / Stingy", img: "img/meaning_dog.png" },
            { id: 15, name: "Cora", type: "slang", content: "CORA", img: "img/cora.png" },
            { id: 15, name: "Cora", type: "meaning", content: "Quarter ($0.25)", img: "img/meaning_coin.png" },
            { id: 16, name: "Pega", type: "slang", content: "PEGA", img: "img/pega.png" },
            { id: 16, name: "Pega", type: "meaning", content: "Glue / Adhesive", img: "img/meaning_glue.png" }
        ],
        5: [
            { id: 17, name: "Choto", type: "slang", content: "CHOTO", img: "img/choto.png" },
            { id: 17, name: "Choto", type: "meaning", content: "Free / No cost", img: "img/meaning_free.png" },
            { id: 18, name: "Marusa", type: "slang", content: "MARUSA", img: "img/marusa.png" },
            { id: 18, name: "Marusa", type: "meaning", content: "Instant Noodles", img: "img/meaning_soup.png" },
            { id: 19, name: "Chorcha", type: "slang", content: "CHORCHA", img: "img/chorcha.png" },
            { id: 19, name: "Chorcha", type: "meaning", content: "Gossip group", img: "img/meaning_gossip.png" },
            { id: 20, name: "Sirimba", type: "slang", content: "SIRIMBA", img: "img/sirimba.png" },
            { id: 20, name: "Sirimba", type: "meaning", content: "Fainting / Spasm", img: "img/meaning_faint.png" }
        ]
    };

    let currentRound = 1;
    let currentRoundCards = [];
    let cardsChosen = [];
    let cardsChosenId = [];
    let matchesFound = 0;
    let totalMoves = 0;

    const tablero = document.getElementById("tablero-memory");
    const roundText = document.getElementById("round-text");
    const matchesDisplay = document.getElementById("matches-count");
    const movesDisplay = document.getElementById("moves-count");
    const restartBtn = document.getElementById("restart-btn");
    const slangListContainer = document.getElementById("slang-list-container");

    // Modals
    const modal = document.getElementById("instructionModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");

    function loadRound(roundNumber) {
        tablero.innerHTML = "";
        slangListContainer.innerHTML = "";
        cardsChosen = [];
        cardsChosenId = [];
        matchesFound = 0;

        roundText.textContent = `ROUND ${roundNumber} / 5`;
        matchesDisplay.textContent = "0 / 4";
        movesDisplay.textContent = totalMoves;

        currentRoundCards = [...roundsData[roundNumber]];
        currentRoundCards.sort(() => 0.5 - Math.random());

        currentRoundCards.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card-memory");
            card.setAttribute("data-id", index); 

            card.innerHTML = `
                <div class="card-memory-inner">
                    <div class="card-memory-front"></div>
                    <div class="card-memory-back">
                        <div class="illustration-container">
                            <img src="${item.img}" alt="${item.name}">
                        </div>
                        <span>${item.content}</span>
                    </div>
                </div>
            `;
            card.addEventListener("click", flipCard);
            tablero.appendChild(card);

            if (item.type === "slang") {
                const li = document.createElement("li");
                li.setAttribute("data-word", item.name);
                li.innerHTML = `<span>${item.content}</span> <span>Pending</span>`;
                slangListContainer.appendChild(li);
            }
        });
    }

    function flipCard() {
        const cardId = this.getAttribute("data-id");

        if (cardsChosenId.includes(cardId) || this.classList.contains("matched") || this.classList.contains("flipped")) {
            return;
        }

        this.classList.add("flipped");
 
        cardsChosen.push(currentRoundCards[cardId]);
        cardsChosenId.push(cardId);

        if (cardsChosen.length === 2) {
            tablero.style.pointerEvents = "none"; 
            totalMoves++;
            movesDisplay.textContent = totalMoves;
 
            setTimeout(checkForMatch, 700);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll(".card-memory");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0].id === cardsChosen[1].id) {
            cards[optionOneId].classList.add("matched");
            cards[optionTwoId].classList.add("matched");

            const matchedWord = cardsChosen[0].name;
            const listItem = slangListContainer.querySelector(`li[data-word="${matchedWord}"]`);
            if (listItem) {
                listItem.classList.add("found");
                listItem.children[1].textContent = "Linked! ✓";
            }

            matchesFound++;
            matchesDisplay.textContent = `${matchesFound} / 4`;

            if (matchesFound === 4) {
                setTimeout(advanceRound, 1000);
            }
        } else {
            cards[optionOneId].classList.remove("flipped");
            cards[optionTwoId].classList.remove("flipped");
        }

        cardsChosen = [];
        cardsChosenId = [];
        tablero.style.pointerEvents = "auto"; 
    }

    function advanceRound() {
        if (currentRound < 5) {
            currentRound++;
            alert(`🎉 Great job! Advancing to Round ${currentRound}`);
            loadRound(currentRound);
        } else {
            alert(`🏆 Congratulations! You completed all rounds with ${totalMoves} total moves!`);
            resetWholeGame();
        }
    }

    function resetWholeGame() {
        currentRound = 1;
        totalMoves = 0;
        loadRound(currentRound);
    }

    if (openModalBtn && modal && closeModalBtn) {
        openModalBtn.addEventListener("click", () => modal.classList.add("active"));
        closeModalBtn.addEventListener("click", () => modal.classList.remove("active"));
    }

    restartBtn.addEventListener("click", resetWholeGame);

    loadRound(currentRound);
});