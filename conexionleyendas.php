<?php
$host = "localhost";
$user = "root";        
$password = "";        
$database = "sistema_usuarios";

$conexion = mysqli_connect($host, $user, $password, $database);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
// Asegura que los acentos y caracteres especiales se muestren bien
mysqli_set_charset($conexion, "utf8");
?>