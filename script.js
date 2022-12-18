/* navigation */

const menuLinks = document.querySelectorAll('.menu-item');
const menu = document.querySelector('.menu');
const sections = document.querySelectorAll('.section');

menu.addEventListener('click', (event)=> {
    if (event.target.classList.contains('menu-item')) {
        menuLinks.forEach(el => el.classList.remove('active'));
        sections.forEach(el => el.classList.add('hidden'));  sections.forEach(el => el.classList.remove('visible'));
        event.target.classList.add('active');
        let link = event.target.getAttribute('href');
        document.getElementById(link.substring(1)).classList.remove('hidden');
        document.getElementById(link.substring(1)).classList.add('visible');
    }
})


