<?php
$aux = 3;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $folio = strtoupper($_POST["folio"]); // Convierte el folio a mayúsculas
    $nombre = $_POST["nombre"];
    $examen = $_POST["examen"];

    // Nombre del archivo CSV que se descargará
    $nombreArchivo = "respuestas_$folio.csv";

    // Cabecera del CSV
    $cabecera = ["Folio", "Nombre", "Examen"];
    for ($i = 1; $i <= $aux; $i++) {
        $cabecera[] = "P$i";
    }

    // Recoger respuestas
    $respuestas = [$folio, $nombre, $examen];
    for ($i = 1; $i <= $aux; $i++) {
        $respuestas[] = $_POST["pregunta_$i"] ?? "";
    }

    // Generar el CSV en memoria
    $output = fopen('php://output', 'w');

    // Definir las cabeceras HTTP para forzar la descarga
    header('Content-Type: text/csv; charset=UTF-8');
    header("Content-Disposition: attachment; filename=$nombreArchivo");

    // Escribir los datos al archivo CSV
    fputcsv($output, $cabecera, ",");
    fputcsv($output, $respuestas, ",");

    // Cerrar el archivo en memoria
    fclose($output);
    exit();
}
?>
