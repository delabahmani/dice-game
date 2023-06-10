 let button = document.querySelector("#btn") 

 let p1dice = document.querySelector("#p1dice")

 let p2dice = document.querySelector("#p2dice")

 let p1score = 0

 let p2score = 0

 let score = document.querySelector("#score")


 function game() {
    const randomNumber = Math.floor(Math.random()* 6) + 1;
    const randomNumber2 = Math.floor(Math.random()* 6) + 1;
    if (randomNumber === 1) {
        p1dice.setAttribute("src", "images/dice1.png");
    } else if (randomNumber === 2) {
        p1dice.setAttribute("src", "images/dice2.png");
    } else if (randomNumber === 3) {
        p1dice.setAttribute("src", "images/dice3.png");
    } else if (randomNumber === 4) {
        p1dice.setAttribute("src", "images/dice4.png");
    } else if (randomNumber === 5) {
        p1dice.setAttribute("src", "images/dice5.png");
    } else if (randomNumber === 6) {
        p1dice.setAttribute("src", "images/dice6.png");
    } 

    if (randomNumber2 === 1) {
        p2dice.setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 === 2) {
        p2dice.setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 === 3) {
        p2dice.setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 3) {
        p2dice.setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 4) {
        p2dice.setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 === 5) {
        p2dice.setAttribute("src", "images/dice5.png");
    } else if (randomNumber2 === 6) {
        p2dice.setAttribute("src", "images/dice6.png");
    }

    if (randomNumber > randomNumber2) {
        p1score ++;
        document.querySelector("#p1score").innerHTML='Player 1 Score: ' + p1score;
        score.innerHTML='Player 1 Wins This Round!';
        score.style.color = "darkmagenta";
    } else if (randomNumber < randomNumber2) {
        p2score ++;
        document.querySelector("#p2score").innerHTML='Player 2 Score: ' + p2score;
        score.innerHTML='Player 2 Wins This Round!';
        score.style.color = "mediumvioletred"
        
    } else if (randomNumber === randomNumber2) {
        score.innerHTML = 'Tied Game!';
        score.style.color = "papayawhip"
    }

    if (p1score === 10) {
       window.location.replace("player1wins.html");

    } else if (p2score === 10) {
        window.location.replace("player2wins.html");
    
    } 




 }


 function playAgain() {
    window.location.replace("index.html");
}
 