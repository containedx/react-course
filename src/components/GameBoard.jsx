import { useState } from 'react';
import Log from '../components/Log.jsx';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(row, col){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
            updatedBoard[row][col] = activePlayerSymbol;
            return updatedBoard;
        });

        setGameTurns(prevTurns => {
            const updatedTurns = [{square: { r: row, c: col}, player: activePlayerSymbol}, ...prevTurns];
            return updatedTurns;
        })

        onSelectSquare();
        CheckWin();
    }

    return(
        <>
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>
            )}
        </ol>

        <Log turns={gameTurns}/>

        </>
    );


    function CheckWin(){

    }
}