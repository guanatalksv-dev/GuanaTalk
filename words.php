<?php
include("php/conexion.php");
$resultado = mysqli_query($conn, "SELECT * FROM words");
?>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Words - GuanaTalk</title>

<link rel="stylesheet" href="styles/words.css">
<link rel="stylesheet" href="styles/navbar.css">
<link rel="stylesheet" href="styles/footer.css">
<link rel="shortcut icon" href="img/favicon_io (1) /favicon.ico" type="image/x-icon">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">


</head>

<body>

<?php include("components/navbar.php"); ?>

<section class="hero">

    <div class="hero-text">
        <h1>Words that accompany you</h1>

        <p>
            Discover popular Salvadoran expressions,
            learn their meaning and listen to their pronunciation.
        </p>
    </div>

    <img src="img/words.elsalvador.png"
         alt="Words"
         class="hero-img">

</section>

<section class="cards-container">

<?php while($word = mysqli_fetch_assoc($resultado)){ ?>

<div class="card">

    <img src="<?php echo $word['imagen']; ?>" alt="">

    <h3><?php echo $word['palabra']; ?></h3>

    <p><?php echo $word['significado']; ?></p>

    <audio controls>
        <source src="<?php echo $word['audio']; ?>" type="audio/mpeg">
    </audio>

        
</div>

<?php } ?>

</section>
<?php include("php/footer.php"); ?>
</body>
</html>