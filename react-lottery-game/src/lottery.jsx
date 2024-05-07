// import { useState } from "react";
// import "./lottery.css";
// import { genTicket,sum } from "./helper";

// export default function Lottery () {
//     let [ ticket,setTicket ] = useState(genTicket(3));

//     let isWinning = sum(ticket) === 15;

//     let buyTicket = () => {
//         setTicket(genTicket(3));
//     }
//     return (
//         <div>
//             <h1>Lottery Game!</h1>
//             <div className="ticket">
//                 <span>{ticket[0]}</span>
//                 <span>{ticket[1]}</span>
//                 <span>{ticket[2]}</span>
//             </div><br />
//             <button onClick={buyTicket}>Buy Ticket</button>
//             <h3>{isWinning && "Congratulations, you won!"}</h3>
//         </div>
//     )
// }


import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";




export default function Lottery({n =3, winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }


    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}