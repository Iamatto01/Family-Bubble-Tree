<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image'])) {
        $targetDir = "uploads/";
        $targetFile = $targetDir . basename($_FILES['image']['name']);

        if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
            echo json_encode(["status" => "success", "url" => $targetFile]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to upload."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No image uploaded."]);
    }
}
?>
