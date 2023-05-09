const cards = document.querySelectorAll("[data-index]");
const buttons = document.querySelectorAll("[data-carousel-button]");
let startIndex = 0;

cards[0].dataset.active = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1; 
        // const activeCard = cards.querySelector("[data-active]"); 
        const activeCard = document.querySelector("[data-active]"); 
        let newIndex = [...cards.children].indexOf(activeCard) + offset; 
        if (newIndex < 0) newIndex = cards.children.length - 1; 
        if (newIndex >= cards.children.length) newIndex = 0; 

        cards.children[newIndex].dataset.active = true;
        delete activeCard.dataset.active; 
    });
});


