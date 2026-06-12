<?php
include("conexionleyendas.php");

$sql = "SELECT * FROM words";
$resultado = mysqli_query($conexion, $sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palabras Guanatalk</title>

    <style>
        body{
            font-family: Arial, sans-serif;
            background:#f4f4f4;
            padding:20px;
        }

        .contenedor{
            display:flex;
            flex-wrap:wrap;
            gap:20px;
        }

        .card{
            background:white;
            width:300px;
            border-radius:10px;
            padding:15px;
            box-shadow:0 0 10px rgba(0,0,0,0.1);
        }

        .card img{
            width:100%;
            height:200px;
            object-fit:cover;
            border-radius:10px;
        }

        h2{
            margin-bottom:20px;
        }

        audio{
            width:100%;
            margin-top:10px;
        }
    </style>
</head>
<body>

<h2>Palabras de Guanatalk</h2>

<div class="contenedor">

<?php while($word = mysqli_fetch_assoc($resultado)): ?>

    <div class="card">

        <?php if(!empty($word['imagen'])): ?>
            <img src="<?php echo $word['imagen']; ?>">
        <?php endif; ?>

        <h3><?php echo $word['palabra']; ?></h3>

        <p><?php echo $word['significado']; ?></p>

        <?php if(!empty($word['audio'])): ?>
            <audio controls>
                <source src="<?php echo $word['audio']; ?>" type="audio/mpeg">
            </audio>
        <?php endif; ?>

    </div>

<?php endwhile; ?>

</div>

</body>
</html>