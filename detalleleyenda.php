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
    <link rel="stylesheet" href="styles/legends.css">
    <style>
        /* Estilos específicos para calcar tu tarjeta clara de detalles */
        body {
            background-color: #ebdcb9; /* Fondo crema exterior de tu web */
            font-family: 'Arial', sans-serif;
        }
        .detalle-container {
            background-color: #f6ebd1; /* Fondo beige claro de la tarjeta */
            max-width: 850px;
            margin: 60px auto;
            padding: 40px;
            border-radius: 15px;
            display: flex;
            gap: 35px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .detalle-img {
            flex: 1;
            max-width: 280px;
        }
        .detalle-img img {
            width: 100%;
            border-radius: 12px;
            object-fit: cover;
            display: block;
        }
        .detalle-info {
            flex: 2;
            display: flex;
            flex-direction: column;
        }
        .detalle-info h1 {
            color: #0b5ba1; /* Color azul del título */
            font-size: 38px;
            margin-top: 0;
            margin-bottom: 20px;
            text-align: center;
        }
        .detalle-info p {
            color: #0b5ba1; /* Color azul de los párrafos */
            font-size: 15px;
            line-height: 1.6;
            text-align: justify;
            margin-bottom: 15px;
        }
        .btn-container {
            text-align: center;
            margin-top: auto; /* Empuja el botón al fondo */
            padding-top: 20px;
        }
        .btn-back {
            background-color: #e3a92b; /* Color amarillo del botón Back */
            color: white;
            border: none;
            padding: 12px 50px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: background 0.2s;
        }
        .btn-back:hover {
            background-color: #c79220;
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