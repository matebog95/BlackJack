let firstCard = Math.floor((Math.random()*11)+2);
let secondCard = Math.floor((Math.random()*11)+2);
let newCard = Math.floor((Math.random()*11)+2);
let newCard2 = Math.floor((Math.random()*11)+2);
let infoID = document.getElementById("info");
let CardsID = document.getElementById("Cards");
let sumID = document.getElementById("Suma");

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  btn.innerHTML = 'New Game';
});

let sum = firstCard + secondCard;

function startGameButton(){

    CardsID.innerHTML= "Cards: " + firstCard + " " + secondCard;
    sumID.innerHTML = "Sum: "+ sum;
   
    if( sum < 21){

        infoID.textContent="Do you want drew a new card?";
    }
    
    else if ( sum === 21)
    {
        infoID.textContent="You WIN!!!";
    }
    else{
        infoID.textContent="You LOST!!!";
    
    } 
}
function DrewCardButton(){

    CardsID.innerHTML= "Cards: " + firstCard + " " + secondCard + " " + newCard
    sum = sum + newCard;
    
    sumID.innerHTML = "Sum: "+ sum ;
   
    if( sum < 21){

        infoID.textContent="Do you want drew a new card?";
        
     }
    
    else if ( sum === 21)
    {
        infoID.textContent="You WIN!!!";
    }
    else{
        infoID.textContent="You LOST!!!";
    
    } 
}

