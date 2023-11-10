var images = ['1.jpeg', '2.jpeg', '3.jpeg']; 
var currentIndex = 0;
var imagen = document.getElementById('imagen');

function cambiarImagen() {
    imagen.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}


setInterval(cambiarImagen, 3000); 