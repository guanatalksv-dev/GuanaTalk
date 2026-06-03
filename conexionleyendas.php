<?php
$host = "localhost";
$user = "root";        // Cambia si tienes otro usuario en MySQL
$password = "";        // Cambia si tu MySQL tiene contraseña
$database = "sistema_usuarios";

$conexion = mysqli_connect($host, $user, $password, $database);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
// Asegura que los acentos y caracteres especiales se muestren bien
mysqli_set_charset($conexion, "utf8");
?>