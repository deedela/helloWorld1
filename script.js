const cards = document.querySelectorAll(".card");
let matchedPairs = 0;
let cardOne, cardTwo;
let disableDeck = false;
function flipCard() {
    console.log('flipCard was executed');
}

function init() {
    shuffleCards ();
    initCardRotate ();
}

function initCardRotate() {
    function addQuestionMarkClass(card) {
        card.children[0].classList.add('question-mark');
    }
    let cardsCollection=document.getElementsByClassName('front-view');
    let cards=Array.prototype.slice.call(cardsCollection,0);
    console.log (cards)
    // cards[0].children[0].classList.add('question-mark');
    cards.forEach(addQuestionMarkClass);
}

function shuffleCards() {  
matchedPairs = 0; // reset matchedPairs variable to 0
disableDeck = false; // reset disableDeck boolean to false
cardOne = cardTwo = ""; // reset cardOne and cardTwo variables to empty string
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]; // create an array of the image numbers, 1-8, twice
arr.sort(() => Math.random() > 0.5 ? 1 : -1); // randomly sort the array

cards.forEach((card, i) => { // loop over the set of cards. For each `card`...
    card.classList.remove("flip"); // remove the 'flip' class
    let imgTag = card.querySelector(".back-view img"); // find the back-view image tag by querying all the childNodes of the current card element for the '.back-view img' CSS selector
    imgTag.src = `images/img-${arr[i]}.png`; // set the value of the src attribute on the current imgTag to a numbered filename based on our randomized array
    card.addEventListener("click", flipCard); // add a click event listener to the current card to execute a function `flipCard` when clicked
  });
}

function flipCard(evt) {
    // console.log('flipCard was executed');
    // console.log(evt);
    const clickedCard = evt.target;
    if (cardOne !== clickedCard && !disableDeck) {
     // make sure that the current variable cardOne is not the same value as the clickedCard, AND that the deck is NOT disabled
     clickedCard.classList.add("flip");
    }
}
  
init();



