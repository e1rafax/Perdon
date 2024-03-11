document.addEventListener("DOMContentLoaded", function() {
  var petalElements = document.querySelectorAll('.petal');

  anime({
    targets: petalElements,
    rotate: '+=360deg',
    easing: 'linear',
    duration: 5000,
    loop: true
  });
});
