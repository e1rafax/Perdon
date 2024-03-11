document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.sunflower').classList.add('grow');
        setTimeout(function () {
            document.querySelector('.flower').classList.add('bloom');
        }, 1000);
    }, 1000);
});

