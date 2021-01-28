let SmallMenu = document.getElementById('SmallMenu')
let Nav = document.querySelector('nav')


SmallMenu.addEventListener('click', (e) => {
    Nav.classList.toggle('shownav')
    console.log(Nav)
})