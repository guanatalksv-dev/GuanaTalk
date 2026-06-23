<?php
session_start();
include 'conexion.php'; 

if (!isset($_SESSION['usuario_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'You must log in to save favorites.']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario_id = $_SESSION['usuario_id'];
    $tipo_item = $_POST['tipo_item'];
    $item_id = intval($_POST['item_id']); 

    $query = "SELECT id FROM favoritos WHERE usuario_id = ? AND tipo_item = ? AND item_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("isi", $usuario_id, $tipo_item, $item_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $delete = "DELETE FROM favoritos WHERE usuario_id = ? AND tipo_item = ? AND item_id = ?";
        $stmt_del = $conn->prepare($delete);
        $stmt_del->bind_param("isi", $usuario_id, $tipo_item, $item_id);
        $stmt_del->execute();
        echo json_encode(['status' => 'removed']);
    } else {
        $insert = "INSERT INTO favoritos (usuario_id, tipo_item, item_id) VALUES (?, ?, ?)";
        $stmt_ins = $conn->prepare($insert);
        $stmt_ins->bind_param("isi", $usuario_id, $tipo_item, $item_id);
        $stmt_ins->execute();
        echo json_encode(['status' => 'added']);
    }
}
?>