document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById('sunflower').classList.add('grow');
  }, 1000);

  setTimeout(function() {
    document.getElementById('sunflower').classList.add('bloom');
  }, 3000);
});

