

let images = ["paper.png","rock.png","scissors.png"];


const rockBtn= document.querySelector(".rock");
const paperBtn= document.querySelector(".paper");
const scissorBtn= document.querySelector(".scissors");
const displayResult = document.querySelector(".winner");
let scores=[0,0];
const playerScore=document.querySelector(".player-score p");
const computerScore=document.querySelector(".computer-score p");



rockBtn.addEventListener("click", function(){
   document.querySelector(".player-hand").src="./assets/"+this.textContent+".png";
    let num = computerTurn();
    if(num===2)
    {
        displayResult.textContent="You Win!";
        scores[0]++;
        playerScore.textContent=scores[0];
    }
    else if(num===1)
    {
        displayResult.textContent="Game Ties";
    }
    else if(num==0)
    {
        displayResult.textContent="Computer Win!";
        scores[1]++;
        computerScore.textContent=scores[1];
    }

})


paperBtn.addEventListener("click", function(){
     document.querySelector(".player-hand").src="./assets/"+this.textContent+".png";
     let num = computerTurn();
   if(num===2)
   {
       displayResult.textContent="Computer Wins!";
       scores[1]++;
        computerScore.textContent=scores[1];
   }
   else if(num===1)
   {
       displayResult.textContent="You Win!";
       scores[0]++;
        playerScore.textContent=scores[0];
   }
   else if(num==0)
   {
       displayResult.textContent="Game Ties";
   }
  
 })
 

scissorBtn.addEventListener("click", function(){
    document.querySelector(".player-hand").src="./assets/"+this.textContent+".png";
   let num = computerTurn();
   if(num===2)
   {
       displayResult.textContent="Game Ties";
   }
   else if(num===1)
   {
       displayResult.textContent="Computer Wins!";
       scores[1]++;
        computerScore.textContent=scores[1];
   }
   else if(num==0)
   {
       displayResult.textContent="You Win!";
       scores[0]++;
        playerScore.textContent=scores[0];
   }


})


function computerTurn(){
    
    let randomNum=Math.floor(Math.random()*3);
    document.querySelector(".computer-hand").src="./assets/"+images[randomNum];
   
    return randomNum;
}

