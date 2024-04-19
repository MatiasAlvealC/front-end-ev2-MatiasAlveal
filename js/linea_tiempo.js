const markers = document.querySelectorAll('.marker');
const images = document.querySelectorAll('.images img');

markers.forEach((marker, index) => {
  marker.addEventListener('click', () => {
    // Ocultar todas las imágenes
    images.forEach(image => {
      image.style.opacity = 0;
    });

    // Mostrar la imagen correspondiente al marcador
    images[index].style.opacity = 1;
  });
});
