for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.classList.add('squareInGrid')
        container.appendChild(square);
    }
}
// what I need to do is create a 16x16 grid of square divs, though I'm not sure how to do that.
//perhaps I could make each div in a line? and make 16 of them? but that seems excessive
//i understand i should probably use flexbox, space evenly or something
//im not sure if i have to make each box its own thing or if i can just make a bunch of boxes