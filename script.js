window.onload = function() {
  animateSunflower();
};

function animateSunflower() {
  const sunflower = document.getElementById('sunflower');
  const petals = document.querySelector('.petals');
  const branches = document.querySelector('.branches');

  // Animación de crecimiento
  sunflower.style.transform = 'scale(0)';
  sunflower.style.transition = 'transform 2s ease-in-out';

  setTimeout(function() {
    sunflower.style.transform = 'scale(1)';
  }, 500);

  // Creación de pétalos
  for (let i = 0; i < 10; i++) {
    const petal = document.createElement('div');
    petal.style.transform = `rotate(${i * 36}deg) translate(130px) rotate(-${i * 36}deg)`;
    petals.appendChild(petal);
  }

  // Creación de ramas
  for (let i = 0; i < 12; i++) {
    const branch = document.createElement('div');
    branch.style.transform = `rotate(${i * 30}deg) translate(110px) rotate(-${i * 30}deg)`;
    branches.appendChild(branch);
  }
}

