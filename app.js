import Game from './game.js';
const playerGrid = document.querySelector('.player');
const computerGrid = document.querySelector('.computer');

// const game = Game();

const screenController = () => {
    const game = Game();
    const playerGrid = document.querySelector('.player');
    const computerGrid = document.querySelector('.computer');

    const updateScreen = () => {
        playerGrid.innerHTML = '';
        computerGrid.innerHTML = '';
        //Create square grid
        
        const createSquares = (grid) => {
            for (let i = 1; i < 101; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            if(grid === playerGrid) {
                square.classList.add('player-square');
            } else {
                square.classList.add('computer-square');
            }
            square.setAttribute('id', i);
            grid.appendChild(square);
            }
        };
        createSquares(playerGrid);
        createSquares(computerGrid);

        const playerBoard = game.getPlayerBoard();
        const computerBoard = game.getComputerBoard();
        const playerSquares = document.querySelectorAll('.player-square');
        const computerSquares = document.querySelectorAll('.computer-square');

        //Player grid styling
        const playerMisses = game.playerGameboard.misses;
        const playerHits = game.playerGameboard.hits;
        const computerMisses = game.computerGameboard.misses;
        const computerHits = game.computerGameboard.hits;

        for (let i = 0; i < playerBoard.length; i++) {
            if (typeof playerBoard[i] === 'object') {
                playerSquares[i].classList.add('player-ship');
            }
        };
        for (let hit of playerHits) {
            playerSquares[hit - 1].style.backgroundColor = 'red';
        }
        for (let miss of playerMisses) {
            playerSquares[miss - 1].style.backgroundColor = 'darkblue';
        }

        //Computer grid styling
        for (let hit of computerHits) {
            computerSquares[hit - 1].style.backgroundColor = 'red';
        }
        for (let miss of computerMisses) {
            computerSquares[miss - 1].style.backgroundColor = 'darkblue';
        }
    }
    const clickHandler = () => {

    }
    updateScreen();
}

screenController();

// squares.forEach(square => {
//     square.addEventListener('click', (e) => {
//         Game().computerGameboard.receiveAttack(e.target.id);
//         // console.log(Game().computerGameboard.getHits())
    
//     })
// });
