document.addEventListener("DOMContentLoaded", function(event) {
    let status = document.getElementById("status");
    let start = document.getElementById("start");
    let boundaries = document.getElementsByClassName("boundary");

    start.addEventListener("mouseenter", startGame);
    
    function startGame(){
        status.textContent = "Game Started"
        
        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "#eeeeee";
        }

        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].addEventListener("mouseenter", lost);
        }
    }

    function lost(){
        status.textContent = "You lost";

        for(let i = 0; i < boundaries.length; i++){
            boundaries[i].style.backgroundColor = "red";
        }
    }
});



