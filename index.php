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
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    
<header class="navbar">
<<<<<<< HEAD:index.php
          <div class="logo">
            <a href="index.php" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit;">
                <img src="img/guanatalk.logo.png" alt="GuanaTalk Logo">
            </a>
        </div>
    <nav>
        <a href="index.php">Home</a>
        <a href="favoritos.html">Favorite</a>
=======
    <div class="logo">
        <a href="index.html" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit;">
            <img src="img/guanatalk.logo.png" alt="GuanaTalk Logo">
        </a>
    </div>
    <nav>
        <a href="index.html">Home</a>
        <a href="favoritos.html">Favorites</a>
>>>>>>> 50b812459c9a1140273f45aa45307d1fd989a06d:index.html
        <a href="aboutus.html">About us</a>
    </nav>
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
    <a href="php/profile.php" class="profile-btn">My Profile</a>
    </div>
</header>

<section class="hero">
  <div class="welcome-container">
    <h1 class="typing-text" id="typingTitle"></h1>
    <p class="fade-in-text" id="fadeInSubtitle">Dive into the traditions, language and spirit of El Salvador.</p>
  </div>
  <img class="hero-img" src="img/mapaES.jpeg" alt="El Salvador">
</section>

<section class="cards">
  <button type="button" class="card pink" onclick="window.location.href='words.html'">
    <img src="img/words.jpeg" alt="Words" class="card-img">
    <p>Words</p>
  </button>

  <a href="traditions.php" class="card green">
    <div class="img-wrap">
        <img src="img/traditions.jpeg" alt="Traditions">
    </div>
    <p>Traditions</p>  
  </a>

  <a href="legends.php" class="card orange">
    <div class="img-wrap">
        <img src="img/legends.jpeg" alt="Legends">
    </div>
    <p>Legends</p>  
  </a>

  <button type="button" class="card blue" onclick="window.location.href='funfacts.html'">
    <img src="img/funfacts.jpeg" alt="Fun Facts" class="card-img">
    <p>Fun Facts</p>
  </button>

  <button type="button" class="card gray" onclick="window.location.href='minigames.html'">
    <img src="img/minigames.jpeg" alt="Mini-games" class="card-img">
    <p>Mini-games</p>
  </button>
</section>

<div class="funfact">
  <i class="ri-megaphone-line"></i>
  <span><b>Fun Fact:</b> Did you know the marble game is known in El Salvador as “chibolas”?</span>
</div>

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