/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores,roundScore,activePlayer, sum, gamePlaying, countOfSix, winningScore;

scores=[0,0];
roundScore=0;
activePlayer=0;
sum=0;
gamePlaying=true;
countOfSix=0;
winningScore=0;

// winningScore=prompt("Enter Winning Score");

// document.querySelector("#current-"+activePlayer).innerHTML=dice;

document.querySelector(".dice").style.display="none";

document.getElementById("score-0").innerText=0;
document.getElementById("current-0").innerText=0;
document.getElementById("score-1").innerText=0;
document.getElementById("current-0").innerText=0;


//set winning score

document.querySelector(".btn-submit").addEventListener("click", function(){
   let scoreInput= document.querySelector(".score-input").value;
   if(scoreInput!=="")
   {
       winningScore=scoreInput;
       alert("Your winning Score sets to "+winningScore+", Now roll your dice");
       document.querySelector(".score-input").disabled=true;
       this.disabled=true;
   }
})



//roll dice button

document.querySelector(".btn-roll").addEventListener("click",function(){
    // 1- Generate Random Number

    
    if(gamePlaying===true)
    {

    if(winningScore===0)
    {
        alert("Enter Winning Score First");
        return;
    }
    
    var dice=Math.floor(Math.random()*6+1);
    //2- Display Numbers 
    var diceDom=document.querySelector(".dice");
    diceDom.style.display="block";
    diceDom.src="dice-"+dice+".png";
    // check for 6 in a row
    if(dice===6)
    {
        countOfSix++;
    }
    else
    {
        countOfSix=0;
    }
    //3- update the round score if it was not 1
    if(dice!==1)
    {
    roundScore+=dice;
    document.querySelector("#current-"+activePlayer).textContent=roundScore;
    }
    else
    {
        nextPlayer();
    }
    //if 6 in a row then nextplayer turn.
    if(countOfSix===2)
    {
        nextPlayer();
    }



}

});


function nextPlayer(){
    activePlayer=activePlayer===1?0:1;
    roundScore=0;
    countOfSix=0;
    document.getElementById("current-0").innerText="0";
    document.getElementById("current-1").innerText="0";
    document.querySelector(".dice").style.display="none";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}

//hold button
document.querySelector(".btn-hold").addEventListener("click", function(){

    if(winningScore===0)
    {
        alert("Enter Winning Score First");
        return;
    }

    scores[activePlayer]+=roundScore;
    roundScore=0;
    document.querySelector("#score-"+activePlayer).innerText=scores[activePlayer];

    if(scores[activePlayer]>=winningScore)
    {
        document.querySelector("#name-"+activePlayer).innerText="Winner!";
        document.querySelector(".dice").style.display="none";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
        gamePlaying=false;
    }
else
{
    nextPlayer();
}


})



//new game button


function gameInitialize(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    winningScore=0;
    document.getElementById("current-0").innerText="0";
    document.getElementById("current-1").innerText="0";
    document.getElementById("score-0").innerText="0";
    document.getElementById("score-1").innerText="0";
    document.querySelector(".dice").style.display="none";
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.getElementById("name-0").innerText="Player 1";
    document.getElementById("name-1").innerText="Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".score-input").disabled=false;
    document.querySelector(".score-input").placeholder="Enter Winning Score";
    document.querySelector(".score-input").value=null;
    document.querySelector(".btn-submit").disabled=false;

}


document.querySelector(".btn-new").addEventListener("click",gameInitialize);


document.querySelector(".btn-rule").addEventListener("click", function(){
    document.querySelector(".container").style.display="block";
})


document.querySelector(".btn-close").addEventListener("click",function(){
    document.querySelector(".container").style.display="none";
})