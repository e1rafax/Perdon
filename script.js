document.addEventListener("DOMContentLoaded", function () {
    // Animación de crecimiento y florecimiento del girasol
    setTimeout(function () {
        document.querySelector('.sunflower').classList.add('grow');
        setTimeout(function () {
            document.querySelector('.flower').classList.add('bloom');
            setTimeout(function () {
                document.querySelector('.petals').classList.add('animate-petals');
            }, 1000);
        }, 2000);
    }, 1000);
});

