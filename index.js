let firstCard = Math.floor((Math.random()*11)+2);
let secondCard = Math.floor((Math.random()*11)+2);
let newCard = Math.floor((Math.random()*11)+2);
let newCard2 = Math.floor((Math.random()*11)+2);
let infoID = document.getElementById("info");
let CardsID = document.getElementById("Cards");
let sumID = document.getElementById("Suma");

let sum = firstCard + secondCard;

function startGame(){

    CardsID.textContent = "Cards: " + firstCard + " " + secondCard;
    sumID.textContent = "Sum: "+ sum;


if( sum < 21){

    infoID.textContent="Do you want drew a new card?";
    sum = sum + newCard;

}
else if ( sum === 21)
{
    infoID.textContent="You WIN!!!";
}
else{
    infoID.textContent="You LOST!!!";

}
}

