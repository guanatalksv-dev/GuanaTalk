
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GuanaTalk</title>

    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="styles/navbar.css">
     <link rel="stylesheet" href="styles/footer.css">

</head>

<body>

<?php include("components/navbar.php"); ?>

<div class="bandera-css bandera-css-izq"></div>
<div class="bandera-css bandera-css-der"></div>

<section class="hero">
    <div class="hero-text">
        <h1>Welcome to GuanaTalk</h1>
        <p>Learn about the culture and dialect of El Salvador</p>
    </div>

    <img class="hero-img" src="img/mapaES.jpeg" alt="El Salvador">
</section>

<section class="cards">

    <button type="button" class="card card-pink" onclick="window.location.href='words.php'">
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

    <button type="button" class="card card-gray" onclick="window.location.href='minigames.php'">
        <img src="img/hangman.png" alt="Mini-games" class="card-img">
        <p>Mini-games</p>
    </button>

</section>
<<<<<<< HEAD


<?php include("php/footer.php"); ?>
=======
>>>>>>> 9d10277772b7ba82447e353c3bf67a7ef5a5d90e
 <script src="JavaScript/navbar.js"></script>
</body>
</html>