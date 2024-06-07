import { useState } from "react";

export default function LudoBoard() {
    const [count, setCount] = useState({blue: 0, red: 0, pink: 0, green: 0});
    let BlueCount = () => {
        setCount((setMoves) => {
            return { ...setMoves, blue: setMoves.blue + 1}
        });
    }
    let RedCount = () => {
        setCount((setMoves) => {
            return { ...setMoves, red: setMoves.red + 1}
        });
    }
    let PinkCount = () => {
        setCount((setMoves) => {
            return { ...setMoves, pink: setMoves.pink + 1}
        });
    }
    let GreenCount = () => {
        setCount((setMoves) => {
            return { ...setMoves, green: setMoves.green + 1}
        });
    }
    return (
        <>
            <p>The Game Begins !</p>
            <div className="board">
                <h3>Blue Moves : {count.blue}</h3>
                <button style = {{backgroundColor : "blue"}} onClick={BlueCount}>+1</button>
                <h3>Red Moves : {count.red}</h3>
                <button style = {{backgroundColor : "red"}} onClick={RedCount}>+1</button>
                <h3>pink Moves : {count.pink}</h3>
                <button style = {{backgroundColor : "pink"}} onClick={PinkCount}>+1</button>
                <h3>Green Moves : {count.green}</h3>
                <button style = {{backgroundColor : "green"}} onClick={GreenCount}>+1</button>
            </div>
        </>
    );
}