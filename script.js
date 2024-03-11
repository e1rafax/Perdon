document.addEventListener("DOMContentLoaded", function() {
  // Define los elementos del girasol
  var raiz = document.querySelector('.raiz');
  var tallo = document.querySelector('.tallo');
  var centro = document.querySelector('.centro');
  var petalos = document.querySelectorAll('.petalo');

  // Oculta los elementos del girasol al principio
  anime.set([raiz, tallo, centro, petalos], { scaleY: 0, scaleX: 0 });

  // Define la secuencia de animaciones para el crecimiento y la floración
  var girasolTimeline = anime.timeline({
    easing: 'easeOutElastic',
    duration: 2000
  });

  girasolTimeline
    .add({
      targets: raiz,
      scaleY: 1,
      scaleX: 1
    })
    .add({
      targets: tallo,
      scaleY: 1,
      scaleX: 1
    }, '-=1500')
    .add({
      targets: centro,
      scaleY: 1,
      scaleX: 1
    }, '-=1000')
    .add({
      targets: petalos,
      scaleY: 1,
      scaleX: 1,
      delay: anime.stagger(100)
    }, '-=800');
});
