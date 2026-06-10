<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GuanaTalk</title>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="navbar">
    <div class="logo">
        <a href="index.php" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit;">
            <img src="img/GuanaTalk.png" alt="GuanaTalk Logo">
        </a>
    </div>
    <nav>
        <a href="index.php">Home</a>
        <a href="favoritos.html">Favorites</a>
        <a href="aboutus.html">About us</a>
    </nav>
   <div class="profile-section">

 <div class="profile-section">

    <div class="menu-lines-dropdown" id="menuLinesDropdown">
        <div class="menu-lines-btn">
            <i class="ri-menu-line"></i>
        </div>

        <div class="dropdown-content">
            <?php if(isset($_SESSION['usuario_id'])): ?>
                <a href="php/logout.php">Log Out</a>
            <?php else: ?>
                <a href="login.html">Login</a>
                <div class="divider"></div>
                <a href="register.html">Register</a>
            <?php endif; ?>
        </div>
    </div>

    <button class="profile-btn" onclick="window.location.href='php/profile.php'">
        My Profile
    </button>

</div>
</header>

<section class="hero">
  <div class="hero-text">
    <h1>Welcome to GuanaTalk</h1>
    <p>Learn about the culture and dialect of El Salvador</p>
  </div>
  <img class="hero-img" src="img/mapaES.jpeg" alt="El Salvador">
</section>

<section class="cards">
  <button type="button" class="card card-pink" onclick="window.location.href='words.html'">
    <img src="img/words.png" alt="Words" class="card-img">
    <p>Words</p>
  </button>
  
  <button type="button" class="card card-green" onclick="window.location.href='traditions.php'">
    <img src="img/traditions.png" alt="Traditions" class="card-img">
    <p>Traditions</p>
  </button>

  <button type="button" class="card card-orange" onclick="window.location.href='php/legends.php'">
    <img src="img/legends.png" alt="Legends" class="card-img">
    <p>Legends</p>
  </button>

  <button type="button" class="card card-blue" onclick="window.location.href='funfacts.html'">
    <img src="img/funfacts.png" alt="Fun Facts" class="card-img">
    <p>Fun Facts</p>
  </button>

  <button type="button" class="card card-gray" onclick="window.location.href='minigames.html'">
    <img src="img/hangman.png" alt="Mini-games" class="card-img">
    <p>Mini-games</p>
  </button>
</section>

<section class="fun-fact-box">
            <div class="fun-fact-content">
                <span class="megaphone-icon">📢</span>
                <p><strong>Fun Fact:</strong> Did you know that the Salvadoran capirucho is hand-carved from cedar wood?</p>
            </div>
</section>

<script>
    const dropdownMenu = document.getElementById('menuLinesDropdown');
    if (dropdownMenu) {
        dropdownMenu.addEventListener('click', function(event) {
            event.stopPropagation(); 
            this.classList.toggle('active');
        });
    }
    document.addEventListener('click', function() {
        if (dropdownMenu) {
            dropdownMenu.classList.remove('active');
        }
    });

    const textToType = "¡Welcome to GuanaTalk!";
    const titleElement = document.getElementById('typingTitle');
    const subtitleElement = document.getElementById('fadeInSubtitle');
    let characterIndex = 0;

    function startTypingEffect() {
        if (characterIndex < textToType.length) {
            titleElement.textContent += textToType.charAt(characterIndex);
            characterIndex++;
            setTimeout(startTypingEffect, 90); 
        } else {
            if (subtitleElement) {
                subtitleElement.style.opacity = "1";
            }
        }
    }

    window.addEventListener('DOMContentLoaded', startTypingEffect);
</script>

</body>
</html>