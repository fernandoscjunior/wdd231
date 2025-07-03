//Getting hamburger button on header
const navButton = document.querySelector('#ham-btn');

//Adding event listener on hambuger button
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
})

