
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GuanaTalk</title>

    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="styles/navbar.css">
</head>

<body>

<?php include("nabvar.php"); ?>

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

    <button type="button" class="card card-orange" onclick="window.location.href='legends.php'">
        <img src="img/legends.png" alt="Legends" class="card-img">
        <p>Legends</p>
    </button>

    <button type="button" class="card card-blue" onclick="window.location.href='funfacts.php'">
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

 <script src="JavaScript/navbar.js"></script>
</body>
</html>