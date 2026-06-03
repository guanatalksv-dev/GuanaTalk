<?php
include("conexionleyendas.php");

if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = $_GET['id'];

    // Buscamos únicamente la leyenda seleccionada
    $query = "SELECT Titulo, Descripcion, Imagen FROM leyendas WHERE legendsID = $id";
    $resultado = mysqli_query($conexion, $query);

    if ($resultado && mysqli_num_rows($resultado) == 1) {
        $leyenda = mysqli_fetch_assoc($resultado);
    } else {
        echo "Leyenda no encontrada.";
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
    <link rel="stylesheet" href="styles/legends.css"> 
    
    <style>
        
        .detalle-container {
            background-color: #f6ebd1; /* Fondo claro de tu imagen */
            max-width: 850px;
            margin: 50px auto;
            padding: 30px;
            border-radius: 12px;
            display: flex;
            gap: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .detalle-img {
            flex: 1;
        }
        .detalle-img img {
            width: 100%;
            border-radius: 10px;
            object-fit: cover;
        }
        .detalle-info {
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .detalle-info h1 {
            color: #0b5ba1; /* Color azul del título */
            font-size: 36px;
            margin-top: 0;
            text-align: center;
            font-family: sans-serif;
        }
        .detalle-info p {
            color: #0b5ba1; /* Color azul del texto */
            font-size: 15px;
            line-height: 1.6;
            text-align: justify;
            font-family: sans-serif;
        }
        .btn-back {
            background-color: #e3a92b; /* Color amarillo del botón Back */
            color: white;
            border: none;
            padding: 10px 40px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin: 15px auto 0 auto;
        }
    </style>
</head>
<body>

    <div class="detalle-container">
        <div class="detalle-img">
            <img src="<?php echo $leyenda['Imagen']; ?>" alt="<?php echo $leyenda['Titulo']; ?>">
        </div>

        <div class="detalle-info">
            <h1><?php echo $leyenda['Titulo']; ?></h1>
            
            <p><?php echo nl2br($leyenda['Descripcion']); ?></p>
            
            <div style="text-align: center;">
                <a href="legends.php" class="btn-back">Back</a>
            </div>
        </div>
    </div>

</body>
</html>