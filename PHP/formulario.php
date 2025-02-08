<form action="guardar_respuestas.php" method="post">
    <label for="folio">Folio:</label>
    <input type="text" name="folio" id="folio" required style="text-transform: uppercase;" title="Solo mayúsculas y números">

    <label for="nombre">Nombre Completo:</label>
    <input type="text" name="nombre" id="nombre" required>

    <label for="examen">Examen:</label>
    <select name="examen" id="examen">
        <option value="Examen Diagnóstico 1" selected>Examen Diagnóstico 1</option>
    </select>

    <h3>Responde las preguntas:</h3>
    <?php for ($i = 1; $i <= 128; $i++): ?>
        <p>Pregunta <?php echo $i; ?>:</p>
        <label><input type="radio" name="pregunta_<?php echo $i; ?>" value="A" required> A</label>
        <label><input type="radio" name="pregunta_<?php echo $i; ?>" value="B"> B</label>
        <label><input type="radio" name="pregunta_<?php echo $i; ?>" value="C"> C</label>
        <label><input type="radio" name="pregunta_<?php echo $i; ?>" value="D"> D</label>
    <?php endfor; ?>

    <button type="submit">Descargar Respuestas</button>
</form>
