<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini games</title>
    <link rel="stylesheet" href="styles/minigames.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="styles/navbar.css">
</head>
<body>
<?php include("components/navbar.php"); ?>

<div class="bandera-css bandera-css-izq"></div>
<div class="bandera-css bandera-css-der"></div>

<section class="hero">
    <div class="hero-text">
        <h1 class="pop-title">Mini-games</h1>
        <p class="pop-subtitle">Put your “Guanaco Power” to the test! <br> Have fun and learn through play.</p>
    </div>
    <img class="hero-img" src="img/minigames.ES.png" alt="El Salvador">
</section>

<section class="cards-grid">

    <a href="loteria.html" class="card-game card-gradient-1">
        <img src="img/" alt="Lotería" class="card-game-img">
        <p>Lotería</p>
    </a>

    <a href="hangman.html" class="card-game card-gradient-2">
        <img src="img/hangman.png" alt="Hangman" class="card-game-img">
        <p>Hangman</p>
    </a>

    <a href="wordsearch.html" class="card-game card-gradient-3">
        <img src="img/wordsearch.png" alt="Word Search" class="card-game-img">
        <p>Word Search</p>
    </a>

    <a href="riddles.html" class="card-game card-gradient-4">
        <img src="img/riddles.png" alt="Riddles" class="card-game-img">
        <p>Riddles</p>  
    </a>

    <a href="memory.html" class="card-game card-gradient-5">
        <img src="img/cards.png" alt="Memory Match" class="card-game-img">
        <p>Memory Match</p>
    </a>

</section>

<script src="JavaScript/minigames.js"></script>

<script src="JavaScript/navbar.js"></script> 
</body>
</html>