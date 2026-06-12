<?php
$host = "localhost";
$user = "root";        
$password = "";        
$database = "guanatalk_db";

$conexion = mysqli_connect($host, $user, $password, $database);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

mysqli_set_charset($conexion, "utf8");
?>