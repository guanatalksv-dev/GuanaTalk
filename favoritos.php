<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$servidor   = "localhost";
$usuario    = "root";
$password   = "";
$base_datos = "guanatalk_db";

$conexion = new mysqli($servidor, $usuario, $password, $base_datos);

if ($conexion->connect_error) {
    die("Error al conectar con la base de datos: " . $conexion->connect_error);
}

$usuario_id = null;
if (isset($_SESSION['usuario_id'])) {
    $usuario_id = $_SESSION['usuario_id'];
} elseif (isset($_SESSION['id_usuario'])) {
    $usuario_id = $_SESSION['id_usuario'];
}
$usuario_id = intval($usuario_id);

$sql = "SELECT f.id, ff.titulo, ff.descripcion, ff.imagen 
        FROM favoritos f
        INNER JOIN funfacts ff ON f.item_id = ff.id_fact
        WHERE f.usuario_id = $usuario_id AND f.tipo_item = 'funfact'";

$resultado = $conexion->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GuanaTalk - My Favorites</title>
    <link rel="stylesheet" href="styles/navbar.css">
    <link rel="stylesheet" href="styles/favoritos-style.css"> 
    <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="styles/footer.css">
    <link rel="shortcut icon" href="img/favicon_io (1) /favicon.ico" type="image/x-icon">
</head>
<body>

    <?php include("components/navbar.php"); ?>

    <div class="back-navigation">
        <a href="funfacts.php" class="btn-back"><i class="ri-arrow-left-line"></i> Back to Fun Facts</a>
    </div>

    <main class="favoritos-page">
        
        <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #0f4fa8; font-size: 2rem; font-weight: 700;">My Saved Favorites 🌟</h2>
            <p style="color: #666; margin-top: 5px;">Here are the national symbols you have saved to your collection.</p>
        </div>

        <div class="fav-cards-grid">
            
            <?php
            if ($resultado && $resultado->num_rows > 0) {
                while ($fila = $resultado->fetch_assoc()) {
                    $titulo      = htmlspecialchars($fila['titulo']);
                    $descripcion = htmlspecialchars($fila['descripcion']);
                    $imagen      = htmlspecialchars($fila['imagen']);
                    ?>
                    
                    <div class="fav-card">
                        <img src="<?php echo $imagen; ?>" alt="<?php echo $titulo; ?>">
                        <h3><?php echo $titulo; ?></h3>
                        <p><?php echo $descripcion; ?></p>
                    </div>

                    <?php
                }
            } else {
                echo "<div class='no-favorites'>
                        <p>You haven't saved any national symbols to your favorites yet.</p>
                        <a href='funfacts.php'>Go Add Some!</a>
                      </div>";
            }
            $conexion->close();
            ?>

        </div>
    </main>

    <script src="JavaScript/navbar.js"></script>
    <?php include("php/footer.php"); ?>
</body>
</html>