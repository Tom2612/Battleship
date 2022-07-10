import Game from './game.js';

const screenController = () => {
    const game = Game();
    const playerGrid = document.querySelector('.player');
    const computerGrid = document.querySelector('.computer');
    const orientationBtn = document.querySelector('#orientation');
    const setMessage = document.querySelector('#set-message');
    const shipInfo = document.querySelector('.ship-info');
    let orientation = true;
    let counter = 1;
    let inPlay = false;

    const shipInfoMessage = () => {
        let { infoName, infoLength } = game.getCurrentBoatInfo(counter);
        shipInfo.textContent = `Current ship: ${infoName}
        Ship length: ${infoLength}`;
    }

    const orientationBtnHandler = () => {
        if (orientationBtn.textContent === 'Go vertical') {
            orientationBtn.textContent = 'Go horizontal';
            orientation = false;
        } else {
            orientationBtn.textContent = 'Go vertical';
            orientation = true;
        }
        return orientation;
    }

    const playerLocationSet = (e) => {
        if (counter == 5 && game.playerSetUp(e.target.id, orientation, counter)) {
            setMessage.textContent = 'Set, ready to play';
            updateScreen();
            startGame();
        } else if (counter < 5 && game.playerSetUp(e.target.id, orientation, counter)) {
            counter += 1;
            setMessage.textContent = 'Ship set, place the next one';
            updateScreen();
            playerGridHover();
            shipInfoMessage();
        } else {
            setMessage.textContent = 'Ship can\'t go there, try again';
            playerGridHover();
        }
    }

    const startGame = () => {
        inPlay = true;
        playerGrid.removeEventListener('click', playerLocationSet);
        computerGrid.addEventListener('click', clickHandler);
        overlayControl(false);
        shipInfo.textContent = 'Good luck!';
        orientationBtn.removeEventListener('click', orientationBtnHandler);
        orientationBtn.textContent = 'Restart';
        orientationBtn.addEventListener('click', restart);
    }

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

    const overlayControl = (condition) => {
        const overlay = document.querySelector('.overlay');
        if (condition == true){
            overlay.style.visibility = 'visible';
        } else {
            overlay.remove();
        }
    }

    const clickHandler = (e) => {
        game.playRound(e.target.id);
        updateScreen();
        if (game.checkGameOver() === 'Player') {
            endgame('Player');
        } else if (game.checkGameOver() === 'Computer') {
            endgame('Computer');
        }
    }

    const endgame = (winner) => {
        computerGrid.removeEventListener('click', clickHandler);
        setMessage.textContent = `${winner} has won the game!`;
        shipInfo.textContent = '';
    }

    const playerGridHover = () => {
        const playerSquares2 = document.querySelectorAll('.player-square');
        playerSquares2.forEach(square => {
            square.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'blue';
            })
            square.addEventListener('mouseout', (e) => {
                e.target.style.backgroundColor = '';
            })
        })
    }

    const restart = () => {
        window.location.reload();
    }

    orientationBtn.addEventListener('click', orientationBtnHandler);
    playerGrid.addEventListener('click', playerLocationSet);

    updateScreen();
    overlayControl(true);
    playerGridHover();
    shipInfoMessage();
}

screenController();
