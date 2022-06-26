const CARDS = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard=false;

function flipCard(){
    if (lockBoard) return;    
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard= true;
        firstCard = this;
        return;        
    }
    secondCard = this;
    hasFlippedCard=false;
    checkForMatch();
}

function checkForMatch(){
    if (firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.Card.removeEventListener('click', flipCard);
    resetBoard();
}


function unflipCards(){
    lockBoard=true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}


function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    CARDS.forEach((card) =>{
        let randomPosition = Math.floor(Math.random()* 12);
        card.style.order = randomPosition;
    })
})();

CARDS.forEach((card) => {
    card.addEventListener('click', flipCard)
});