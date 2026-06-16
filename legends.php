<?php
include("conexionleyendas.php");


$query = "SELECT legendsID, Titulo, Descripcion, Imagen FROM leyendas";
$resultado = mysqli_query($conexion, $query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Legends</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="styles/legends.css">
    <link rel="stylesheet" href="styles/navbar.css">

</head>
<body>
   <?php include("components/navbar.php"); ?>

    <section class="hero">
      <div class="hero-text">
        <h1>Legends</h1>
            <p>
                 Discover traditional tales filled with mystery, culture, and imagination, where every story carries the wisdom of the past and the spirit of different generations. These narratives invite you to explore magical worlds, ancient traditions, and unforgettable characters that bring history and creativity to life in a unique and captivating way.
                </p>        
        </div>
        <div class="hero-image">
            <img src="img/leyendas.png  " alt="Legend Girl">
      </div>
    </section>

    <div class="cards-container">
        <?php
        if ($resultado && mysqli_num_rows($resultado) > 0) {
            while ($row = mysqli_fetch_assoc($resultado)) {
                ?>
                <div class="card">
                    <img src="<?php echo $row['Imagen']; ?>" alt="<?php echo $row['Titulo']; ?>">

                    <h2><?php echo $row['Titulo']; ?></h2>

                    <p><?php echo $row['Descripcion']; ?></p>

                    <a href="detalleleyenda.php?id=<?php echo $row['legendsID']; ?>">
                        <button>Read more</button>
                    </a>
                </div>
                <?php
            }
        } else {
            echo "<p style='color:white;'>No se encontraron leyendas en la base de datos.</p>";
        }
        ?>
    </div>
         <script src="JavaScript/navbar.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/js/bootstrap.min.js"></script>
</body>
</html>