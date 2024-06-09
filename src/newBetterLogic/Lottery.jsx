import {useState} from "react";
import "./Lottery.css"; 
import { generateTickets, sum } from "./helper.js";
import Ticket from './Ticket.jsx';

export default function Lottery({n, winningSum}) {
    const [ticket, setTicket] = useState(generateTickets(n));
    let isWinning = sum(ticket) === winningSum;
    let getTicket = () => {
        setTicket(generateTickets(n));
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
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={getTicket}>get ticket</button>
            <h2>{isWinning && "congractulations you've got a winning score :)"}</h2>
        </>
    );
}