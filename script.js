document.addEventListener("DOMContentLoaded", function () {
  // Inicialmente, ocultamos la flor y la raíz
  document.querySelector(".flor").style.display = "none";
  document.querySelector(".raiz").style.display = "none";

  // Mostrar la raíz después de 1 segundo
  setTimeout(function () {
    document.querySelector(".raiz").style.display = "block";
  }, 1000);

  // Mostrar la flor después de 2 segundos
  setTimeout(function () {
    document.querySelector(".flor").style.display = "block";
  }, 2000);

  // Animación de crecimiento del tallo
  anime({
    targets: '.tallo',
    translateY: ['-200px', '0px'],
    duration: 2000,
    easing: 'easeOutElastic'
  });

  // Animación de apertura de los pétalos
  anime({
    targets: '.petalos',
    scale: [0, 1],
    duration: 2000,
    easing: 'easeOutElastic',
    delay: 2000
  });
});
