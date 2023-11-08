var images = ['1.jpeg', '2.jpeg', '3.jpeg']; // Rutas de las imágenes
var currentIndex = 0; // Índice actual de la imagen
var imagen = document.getElementById('imagen');

function cambiarImagen() {
    imagen.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Cambiar al siguiente índice circularmente
}

// Cambiar automáticamente la imagen cada 3 segundos
setInterval(cambiarImagen, 3000); // 3000 milisegundos = 3 segundos