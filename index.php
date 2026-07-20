
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GuanaTalk</title>

 <meta property="og:type" content="website">
<meta property="og:title" content="GuanaTalk">
<meta property="og:description" content="Explore Salvadoran culture.">
<meta property="og:image" content="https://guanatalk.freedev.app/img/GuanaTalk%20logo.png.png">
<meta property="og:url" content="https://guanatalk.freedev.app/">

    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="styles/navbar.css">
     <link rel="stylesheet" href="styles/footer.css">
    <link rel="shortcut icon" href="img/favicon_io (1)/favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

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
        <img src="img/wordsearch.png" alt="Guana-games" class="card-img">
        <p>Guana-games</p>
    </button>

</section>
 <script src="JavaScript/navbar.js"></script>
    <?php include("php/footer.php"); ?>
</body>
</html>