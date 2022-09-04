document.addEventListener("DOMContentLoaded", function(event) {
    let score = 0;

    let status = document.getElementById("status");
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let boundaries = document.getElementsByClassName("boundary");
    let gameBorders = document.getElementById("game");

    var showScore = document.createElement("h2");
    showScore.textContent = "Score: " + score
    document.body.appendChild(showScore);

    start.addEventListener("mouseenter", startGame);  
    start.addEventListener("click", restartGame);
    
    function startGame(){
        status.textContent = "Game Started";

        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "#eeeeee";
        }

        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].addEventListener("mouseenter", lostGame)
        }

        gameBorders.addEventListener("mouseleave", outOfBounds);
        end.addEventListener("mouseenter", wonGame)   
    }

    function restartGame(){
        score = 0
        showScore.textContent = "Score: " + score
    }

    function outOfBounds(){
        status.textContent = "Warning! Out of borders."
        
        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "red";
        }

        endGame();
    }

    function wonGame(){
        score++;
        status.textContent = "You Won!";
        showScore.textContent = "Score: " + score

        endGame();
    }

    function lostGame(){
        score--;
        status.textContent = "You lost";
        showScore.textContent = "Score: " + score

        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "red";
        }
        
        endGame();
    }

    function endGame(){
        gameBorders.removeEventListener("mouseleave", outOfBounds)
        end.removeEventListener("mouseenter", wonGame)
        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].removeEventListener("mouseenter", lostGame)
        }
    }
});



