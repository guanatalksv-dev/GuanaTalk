<?php
// Importamos la conexión
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
    
</head>
<body>
     <header>
        <nav class="navbar">
            <div class="logo">
                <a href="index.html">
                 <img src="img/guanatalk.logo.png" alt="Logo">
                </a>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="favoritos.html">Favorite</a></li>
                <li><a href="aboutus.html">About us</a></li>
            </ul>
            <button class="profile-btn">My Profile</button>
        </nav>
    </header>

    <section class="hero">
      <div class="hero-text">
        <h1>Legends</h1>
        <p>Discover traditional tales filled with mystery, culture, and imagination</p><br>
         <div class="search-box">
                <input type="text" placeholder="🔍 Search...">
            </div>
        </div>
        <div class="hero-image">
            <img src="img/legend.girl.png" alt="Legend Girl">
      </div>
    </section>

    <div class="cards-container">
        <?php
        // Iteramos sobre los registros que devolvió la base de datos
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

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/js/bootstrap.min.js"></script>
</body>
</html>