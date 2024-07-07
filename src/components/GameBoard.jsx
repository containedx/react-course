import { useState } from 'react';
import Log from './Log.jsx';
import GameOver from './GameOver.jsx'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const [gameTurns, setGameTurns] = useState([]);
    const [winText, setWinText] = useState("");

    function handleSelectSquare(row, col){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
            updatedBoard[row][col] = activePlayerSymbol;

            CheckWin(updatedBoard);

            return updatedBoard;
        });

        setGameTurns(prevTurns => {
            const updatedTurns = [{square: { r: row, c: col}, player: activePlayerSymbol}, ...prevTurns];
            return updatedTurns;
        })

        
        onSelectSquare();
    }

    return(
        <>
        {winText !== "" && <GameOver winner={winText} />}
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>
            )}
        </ol>
        <Log turns={gameTurns}/>

        </>
    );


    function CheckWin(board){
        // Check rows
        for (let row = 0; row < 3; row++) {
            if (board[row][0] === activePlayerSymbol && board[row][1] === activePlayerSymbol && board[row][2] === activePlayerSymbol) {
                setWinText(`${activePlayerSymbol} wins!`);
                return;
            }
        }

        // Check columns
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === activePlayerSymbol && board[1][col] === activePlayerSymbol && board[2][col] === activePlayerSymbol) {
                setWinText(`${activePlayerSymbol} wins!`);
                return;
            }
        }

        // Check diagonals
        if (board[0][0] === activePlayerSymbol && board[1][1] === activePlayerSymbol && board[2][2] === activePlayerSymbol) {
            setWinText(`${activePlayerSymbol} wins!`);
            return;
        }
        if (board[0][2] === activePlayerSymbol && board[1][1] === activePlayerSymbol && board[2][0] === activePlayerSymbol) {
            setWinText(`${activePlayerSymbol} wins!`);
            return;
        }

        if(gameTurns.length === 8 && winText === ""){
            setWinText("draw!");
        }
    }
}