document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let petals = document.querySelectorAll('.petal');
        petals.forEach((petal, index) => {
            petal.style.transform = `rotate(${index * 45}deg)`;
        });
    }, 5000);
});


