let button = document.querySelector('.hamburger');
let menufield = document.querySelector('.mobile-nav-hamburger');


button.addEventListener('click', function(){
    menufield.classList.toggle('active')
})