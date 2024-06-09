import {useState} from "react";
import "./Lottery.css"; 
import { generateTickets, sum } from "./helper.js";

export default function Lottery() {
    const [ticket, setTicket] = useState(generateTickets(3));
    let isWinning = sum(ticket) === 15 ? true : false;
    let getTicket = () => {
        setTicket(generateTickets(3));
    }

    return (
        <>
            <h1>Lottery Game</h1>
            <hr />
            <p><b>how's this work?</b></p>
            <p>If your <b>winning score</b> is exactly [15] then you're the winner</p>
            <p>winning score : when below three values add up to the desired score.</p>
            <hr />
            <br />
            <div className="ticketBox">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={getTicket}>get ticket</button>
            <h2>{isWinning && "congractulations you've got a winning score :)"}</h2>
        </>
    );
}