window.onload = function() {
  animateSunflower();
};

function animateSunflower() {
  const sunflower = document.getElementById('sunflower');
  const petals = document.querySelector('.petals');

  // Animación de crecimiento
  sunflower.style.transform = 'scale(0)';
  sunflower.style.transition = 'transform 2s ease-in-out';

  setTimeout(function() {
    sunflower.style.transform = 'scale(1)';
  }, 500);

  // Creación de pétalos
  for (let i = 0; i < 10; i++) {
    const petal = document.createElement('div');
    petal.style.position = 'absolute';
    petal.style.width = '100px';
    petal.style.height = '50px';
    petal.style.backgroundColor = '#FFD700'; /* Color de los pétalos */
    petal.style.borderRadius = '50%';
    petal.style.transform = `rotate(${i * 36}deg) translate(100px) rotate(-${i * 36}deg)`;
    petals.appendChild(petal);
  }
}
