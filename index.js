let firstCard = Math.floor((Math.random()*11)+2);
let secondCard = Math.floor((Math.random()*11)+2);
let thirdCard = Math.floor((Math.random()*11)+2);

// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;

if( sum < 21){
    
    console.log("Do you want drew a new card?")
    sum =+ thirdCard;

} else if ( sum === 21)
{
    console.log("You WIN!!!")
    

}
else{
        console.log("You LOST!!!")
}

console.log(sum);
