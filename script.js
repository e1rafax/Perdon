// script.js
document.addEventListener('DOMContentLoaded', () => {
  const sunflower = document.querySelector('.sunflower');
  const petals = document.querySelector('.petals');

  function updateSunflower() {
    const time = new Date().getTime();
    const rotation = (time / 1000) * 0.1; // Adjust the speed of the rotation here
    petals.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(updateSunflower);
  }

  requestAnimationFrame(updateSunflower);
});
