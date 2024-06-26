
import './App.css'
import Ticket from './Ticket';
import TicketNum from './TicketNum';
import Lottery from "./lottery";

function App() {

  let winCondition = (ticket)=>{
    return ticket.every((num) => num === ticket[0]);
  };
  

  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}
export default App
