let cardIndex=1;
showCards(cardIndex); 

    // Tackling previous & next button functionality
function plusCards(n) {
    showCards(cardIndex += n); 
}; 

function showCards(n) {
    let i;
    let cards = document.getElementsByClassName("card"); 
    const formSubmit = document.querySelector(".form-submit"); 

    if (n > cards.length) {
        cardIndex = 1; 
    };
    if (n < 1) {
        cardIndex = cards.length; 
    }; 
    for (i=0; i<cards.length; i++) {
        cards[i].style.display = 'none'; 
    }; 

    cards[cardIndex-1].style.display = 'block';
    if (cardIndex == cards.length) {
        formSubmit.removeAttribute('disabled'); 
    };
}

// Watching for Events - Debugging Helpers!
document.addEventListener('DOMContentLoaded', e => {
    console.log('DOM Content Loaded Event fired'); 
})
document.addEventListener('load', e => {
    console.log('Load fired'); 
})
document.addEventListener('beforeunload', e => {
    console.log('Before Unload Event fired'); 
})
window.addEventListener('load', e => {
    console.log('Window Load fired'); 
})
window.addEventListener('beforeunload', e => {
    console.log('Before Window Unload Event fired'); 
})
window.addEventListener('unload', e => {
    console.log('Window Unload Event fired'); 
})
