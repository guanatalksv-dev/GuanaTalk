document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-container");
    
    
    let savedFavorites = JSON.parse(localStorage.getItem("guanatalk_favorites")) || [];

    
    cards.forEach(card => {
        const cardId = card.getAttribute("data-id");
        const starIcon = card.querySelector(".favorite-toggle");

       
        if (savedFavorites.some(fav => fav.id === cardId)) {
            starIcon.classList.remove("ri-star-line");
            starIcon.classList.add("ri-star-fill");
            starIcon.style.color = "#f1c40f"; 
        }

        
        starIcon.addEventListener("click", (e) => {
            
            e.stopPropagation(); 

            
            const title = card.querySelector(".card-front h3").innerText;
            const imgSrc = card.querySelector(".card-front img").getAttribute("src");
            const description = card.querySelector(".card-back p").innerText;

            const cardData = { id: cardId, title, imgSrc, description };

            
            const isFavorite = savedFavorites.some(fav => fav.id === cardId);

            if (!isFavorite) {
                
                savedFavorites.push(cardData);
                starIcon.classList.remove("ri-star-line");
                starIcon.classList.add("ri-star-fill");
                starIcon.style.color = "#f1c40f";
            } else {
                
                savedFavorites = savedFavorites.filter(fav => fav.id !== cardId);
                starIcon.classList.remove("ri-star-fill");
                starIcon.classList.add("ri-star-line");
                starIcon.style.color = ""; 
            }

           
            localStorage.setItem("guanatalk_favorites", JSON.stringify(savedFavorites));
        });
    });
});