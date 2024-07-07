export default function GameOver({winner}) {

function Restart()
{
    window.location.reload();
}

    return <div id="game-over">
        <h2> GAME OVER! </h2>
        <h1>{winner}</h1>

        <button onClick={Restart}>Restart</button>
    </div>
}