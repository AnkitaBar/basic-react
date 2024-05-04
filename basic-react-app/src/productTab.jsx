import Product from "./product";

function ProductTab () {
   // let options = [<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];
    //let options2 = {a:"hi-tech",b:"durable" ,c:"fast"};
    // let options = ["hi-tech","durable" ,"fast"];
    return(
        <div className="ProductTab" >
        {/* <Product title="phone" price={30000} features={options}/>
        <Product title="laptop" price={40000} features={{a:"fast"}}/> */}
        <Product title="Logitech MX Master" idx={0}/>
        <Product title="Apple Pencile (2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-transformer " idx={2}/>
        <Product title="Petronics Toad" idx={3}/>
        </div>
    )
}

export default ProductTab;