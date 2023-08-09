for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.classList.add('squareInGrid')
        container.appendChild(square);
        square.addEventListener("mouseover", func)
    }
}
function func(event){
   event.target.style.backgroundColor = "green";
}
function gridPrompt(){
    playerChoice = prompt("Please enter how big you want the grid to be. I.e. 10, for a 10x10 grid. (Maximum of 100)")
    if (playerChoice >= 1 && playerChoice <= 100){
    generateGrid(playerChoice);
} else {
    alert ("Please input a number between 1 and 100.")
}
}
function generateGrid(){
    container.innerHTML = ""
    for (let i = 0; i < playerChoice; i++){
        for (let j = 0; j < playerChoice; j++){
            const square = document.createElement('div');
            square.classList.add('squareInGrid2')
            container.appendChild(square);
            square.addEventListener("mouseover", func)
        }
    }
    playerPercent = 100/playerChoice;
    document.documentElement.style.setProperty('--player-percent', playerPercent + '%');
}
// what I need to do is create a 16x16 grid of square divs, though I'm not sure how to do that.
//perhaps I could make each div in a line? and make 16 of them? but that seems excessive
//i understand i should probably use flexbox, space evenly or something
//im not sure if i have to make each box its own thing or if i can just make a bunch of boxes
