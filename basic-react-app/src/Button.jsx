function printHello (event) {
    console.log("Hello!");
    console.log(event);
}
function printBye () {
    console.log("Bye!");
}
export default function Button () {
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ratione harum laborum, amet quod, labore adipisci minima nihil obcaecati fugit fugiat. Explicabo nostrum qui veritatis ullam ipsum ea cupiditate amet.</p>
        </div>
    )
}