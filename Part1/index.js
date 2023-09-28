
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
    playerSpan.innerText = player 

    const winner = calculateWinner();
    if (winner) {
        alert(`${winner} is the winner!`);
    } else if (isBoardFull()) {
        alert('Game is a tie!');
    }
}

function isBoardFull() {
    for (const square of squares) {
        if (square.innerText === ''){
            return false;
        }
    }
    return true;
}

const playerSpan = document.querySelector('#current-player');

let squares = document.querySelectorAll('.square') 

for(let square of squares) {
    square.addEventListener('click', play)         
}

function calculateWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        const squareAText = squares[a].innerText;
        const squareBText = squares[b].innerText;
        const squareCText = squares[c].innerText;
        if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
            return squareAText;
        }
    }
    return undefined;
}



