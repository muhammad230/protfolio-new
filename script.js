let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navebar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var typed = new Typed('.multiple-text', {
    strings: ['frontent Developer.','Web Developer.','js Developer.'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });