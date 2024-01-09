let mobileNav = document.getElementById('mobile-nav');
let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', ()=>{
    mobileNav.classList.toggle('right-[-100%]');
})