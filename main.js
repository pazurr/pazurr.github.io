const  body = document.querySelector('body');
const scrollbar =document.querySelector('.progress_bar');

window.addEventListener('scroll',() =>{
    let scroll = window.scrollY / (body.clientHeight - window.innerHeight)
    let scrollPercent = Math.round(scroll * 100);
    scrollbar.style.width = scrollPercent + '%';

});