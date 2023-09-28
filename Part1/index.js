
let player = 'X'

let play = (evt) => {
    const targetSquare = evt.target;
    targetSquare.innerText = player;
    if (player === 'X') {
        player = 'O'; 
    } else {
        player = 'X';
    }
    const playerSpan = document.querySelector('#current-player'); 
    playerSpan.innerText.evt = player 
}

const playerSpan = document.querySelector('#current-player');

let squares = document.querySelectorAll('.square') 

squares.forEach((square) => {
    square.addEventListener('click',(evt)=>{
        let element = evt.target.innerHTMl
        play(element) 
    })
    console.log(square)
})




