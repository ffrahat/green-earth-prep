// navIcon

const navIcon = document.getElementById('navicon');
const navBar = document.getElementById('navbar');
console.log(navBar)

navIcon.addEventListener('click', () => {
    console.log('clicked')
    navBar.classList.toggle('nav-shows');
})