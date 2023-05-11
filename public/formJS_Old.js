const cards = document.querySelectorAll("[data-index]");
const buttons = document.querySelectorAll("[data-carousel-button]");
const body = document.querySelector('body'); 
let startIndex = 0;

// Onload is going to reset the index or active card to the first one every time.
window.onload = function setupElements() {
    cards[0].dataset.active = true;
    cards.forEach( card => {
        if (!card.dataset.active) {
            card.classList.add('hide');
        }
    })
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1; 
        const activeCard = document.querySelector("[data-active]"); 
        // const activeCard = document.querySelector(".hide"); 
        console.log(activeCard);
        let newIndex = [...cards].indexOf(activeCard) + offset; 
        if (newIndex < 0) newIndex = cards.length - 1; 
        if (newIndex >= cards.length) newIndex = 0; 

        cards[newIndex].classList.remove('hide'); 
        cards[newIndex].dataset.active = true;
        delete activeCard.dataset.active; 
        activeCard.classList.add('hide');
    });
});


