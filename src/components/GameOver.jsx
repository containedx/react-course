export default function GameOver({winner}) {
    return <div id="game-over">
        <h2> GAME OVER! </h2>
        <h1>{winner}</h1>

        <button>Restart</button>
    </div>
}