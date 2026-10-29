// Capturar los elementos del DOM
const fileInput = document.getElementById('fileInput');
const resultCard = document.getElementById('resultCard');
const fileNameDisplay = document.getElementById('fileName');
const fileTypeDisplay = document.getElementById('fileType');
const fileSizeDisplay = document.getElementById('fileSize');
const imagePreview = document.getElementById('imagePreview');

// Escuchar el evento 'change' cuando se selecciona un archivo
fileInput.addEventListener('change', function(event) {
    // Obtener el primer archivo seleccionado (concepto de File)
    const file = event.target.files[0];

    if (file) {
        // nombre, tipo y tamaño del archivo
        fileNameDisplay.textContent = `Nombre: ${file.name}`;
        fileTypeDisplay.textContent = `Tipo: ${file.type}`;
        fileSizeDisplay.textContent = `Tamaño: ${file.size} bytes`;

        // instancia de FileReader para previsualizar la imagen
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            // Mostrar la tarjeta de resultados que estaba oculta
            resultCard.style.display = 'block';
        }
        
        // Leer el archivo como una URL de datos
        reader.readAsDataURL(file);
    }
});