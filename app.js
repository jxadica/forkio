document.addEventListener("DOMContentLoaded", function() {
    let logo = document.querySelector(".logo");

    logo.addEventListener("mouseover", function() {
        logo.src = 'images/logo-hover 1.png';
    });

    logo.addEventListener("mouseout", function() {
        logo.src = 'images/logo.png';
    });
});
