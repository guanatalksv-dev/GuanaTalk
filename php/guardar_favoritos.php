<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

include 'conexion.php'; 

$db = isset($conn) ? $conn : (isset($conexion) ? $conexion : null);

if (!$db) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection variable not found.']);
    exit;
}

$usuario_id = null;
if (isset($_SESSION['usuario_id'])) {
    $usuario_id = $_SESSION['usuario_id'];
} elseif (isset($_SESSION['id_usuario'])) {
    $usuario_id = $_SESSION['id_usuario'];
}

if (!$usuario_id) {
    echo json_encode(['status' => 'error', 'message' => 'You must log in to save favorites.']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tipo_item = isset($_POST['tipo_item']) ? trim($_POST['tipo_item']) : '';
    $item_id = isset($_POST['item_id']) ? intval($_POST['item_id']) : 0; 

    if (empty($tipo_item) || $item_id <= 0) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid item details.']);
        exit;
    }

    $query = "SELECT id FROM favoritos WHERE usuario_id = ? AND tipo_item = ? AND item_id = ?";
    $stmt = $db->prepare($query);
    $stmt->bind_param("isi", $usuario_id, $tipo_item, $item_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $delete = "DELETE FROM favoritos WHERE usuario_id = ? AND tipo_item = ? AND item_id = ?";
        $stmt_del = $db->prepare($delete);
        $stmt_del->bind_param("isi", $usuario_id, $tipo_item, $item_id);
        $stmt_del->execute();
        echo json_encode(['status' => 'removed']);
    } else {
        $insert = "INSERT INTO favoritos (usuario_id, tipo_item, item_id) VALUES (?, ?, ?)";
        $stmt_ins = $db->prepare($insert);
        $stmt_ins->bind_param("isi", $usuario_id, $tipo_item, $item_id);
        $stmt_ins->execute();
        echo json_encode(['status' => 'added']);
    }
    $stmt->close();
}
?>