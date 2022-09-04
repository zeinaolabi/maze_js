document.addEventListener("DOMContentLoaded", function(event) {
    let score = 0;

    let status = document.getElementById("status");
    let start = document.getElementById("start");
    let boundaries = document.getElementsByClassName("boundary");
    let gameBorders = document.getElementById("game");

    console.log(start)

    start.addEventListener("mouseenter", startGame);  
    
    function startGame(){
        status.textContent = "Game Started";
        status.textContent = "Score: " + score;
        
        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "#eeeeee";
        }

        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].addEventListener("mouseenter", lost);
        }

        gameBorders.addEventListener("mouseleave", outOfBounds)
    }

    function outOfBounds(){
        status.textContent = "Stay within the borders please"
        
        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "red";
        }
    }

    function lost(){
        status.textContent = "You lost";

        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "red";
        }

        score--;
    }
});



