let menu= document.querySelector(".menuButton");
let close= document.querySelector(".close");
let phone= document.querySelector(".phone");


document.addEventListener("DOMContentLoaded", function() {
    let logo = document.querySelector(".logo");

    logo.addEventListener("mouseover", function() {
        logo.src = 'images/logo-hover 1.png';
    });

    logo.addEventListener("mouseout", function() {
        logo.src = 'images/logo.png';
    });
});

menu.addEventListener("click", function(){
    menu.style.display="none";
    close.style.display="inline-block";
    phone.style.display="flex";
})
close.addEventListener("click", function(){
    menu.style.display="inline-block";
    close.style.display="none";
    phone.style.display="none";

})

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
