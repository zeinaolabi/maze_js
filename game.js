document.addEventListener("DOMContentLoaded", function(event) {
    let score = 0;
    let saveBool = false;
    var name = prompt("What's your name?");

    if(localStorage.getItem(name)){
        score = localStorage.getItem(name)
    }

    let status = document.getElementById("status");
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let boundaries = document.getElementsByClassName("boundary");
    let gameBorders = document.getElementById("game");

    var showScore = document.createElement("h2");
    showScore.textContent = "Score: " + score
    document.body.appendChild(showScore);

    var greet = document.createElement("h2");
    greet.textContent = "Hello,  " + name + "!"
    document.body.appendChild(greet);

    var saveScore = document.createElement("button");
    saveScore.textContent = "Save Score"
    document.body.appendChild(saveScore);

    var removeScore = document.createElement("button");
    removeScore.textContent = "Remove Score"
    document.body.appendChild(removeScore);

    start.addEventListener("mouseenter", startGame);  
    start.addEventListener("click", restartGame);
    saveScore.addEventListener("click", saveScoreLocally)
    removeScore.addEventListener("click", removeScoreLocally);
    
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
        if(saveBool){
            localStorage.setItem(name, score);
        }
        gameBorders.removeEventListener("mouseleave", outOfBounds)
        end.removeEventListener("mouseenter", wonGame)
        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].removeEventListener("mouseenter", lostGame)
        }
    }

    function saveScoreLocally(){
        saveBool = true;
        localStorage.setItem(name, score);
    }

    function removeScoreLocally(){
        saveBool = false;
        localStorage.removeItem(name);
        showScore.textContent = "Score: " + score
    }
});



