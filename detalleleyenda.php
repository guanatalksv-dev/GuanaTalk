<?php
// 1. Importamos tu archivo de conexión real
include("conexionleyendas.php");

// 2. Validamos el parámetro 'id' que viene desde el botón Read More
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = $_GET['id'];

    // 3. Traemos todos los campos, incluyendo el texto largo (Contenido_Completo)
    $query = "SELECT Titulo, Descripcion, Descripcion_larga, Imagen FROM leyendas WHERE legendsID = $id";
    $resultado = mysqli_query($conexion, $query);

    if ($resultado && mysqli_num_rows($resultado) == 1) {
        $leyenda = mysqli_fetch_assoc($resultado);
    } else {
        echo "La leyenda no existe en la base de datos.";
        exit;
    }
} else {
    echo "Acceso no válido.";
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $leyenda['Titulo']; ?></title>
    <link rel="stylesheet" href="styles/detalleslegends.css">
        
    
</head>
<body>

    <div class="detalle-container">
        <div class="detalle-img">
            <img src="<?php echo $leyenda['Imagen']; ?>" alt="<?php echo $leyenda['Titulo']; ?>">
        </div>

        <div class="detalle-info">
            <h1><?php echo $leyenda['Titulo']; ?></h1>
            
            <p>
                <?php echo nl2br($leyenda['Descripcion_larga']); ?>
            </p>
            
            <div class="btn-container">
                <a href="legends.php" class="btn-back">Back</a>
            </div>
        </div>
    </div>

</body>
</html>