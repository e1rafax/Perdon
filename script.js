document.addEventListener("DOMContentLoaded", function() {
    var sunflower = document.querySelector('.sunflower');
    var flower = document.querySelector('.flower');
    var petals = document.querySelector('.petals');

    // Espera un momento antes de iniciar la animación
    setTimeout(function() {
        sunflower.classList.add('grow');
        setTimeout(function() {
            flower.classList.add('bloom');
            setTimeout(function() {
                petals.classList.add('animate-petals');
            }, 1000); // Espera antes de iniciar la animación de los pétalos
        }, 2000); // Espera antes de hacer florecer la flor
    }, 1000); // Espera antes de hacer crecer el girasol
});

