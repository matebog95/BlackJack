let firstCard;
let secondCard;
let newCard; 
let newCard2;
let infoID = document.getElementById("info");
let CardsID = document.getElementById("Cards");
let sumID = document.getElementById("Suma");
let sum;

function startGameButton(){

    firstCard = Math.floor((Math.random()*11)+2);
    secondCard = Math.floor((Math.random()*11)+2);
    sum = firstCard + secondCard;
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

  
    newCard = Math.floor((Math.random()*11)+2);
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
