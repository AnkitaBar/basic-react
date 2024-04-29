
import './App.css'
//import
import Title from "./Title.jsx";//default
//import {Title} from "./Title.jsx";//named
import Product from './product.jsx';
import ProductTab from './productTab.jsx';

function Description () {
  return <h1>I am the description!</h1>
}
function Source () {
  return <h1>I am the source!</h1>
}

function App() {
  
  return (
    <div className='mainbox'>
      {/* <Title/>
      <Description/>
      <Source/> */}
      <ProductTab/>
  
    </div>
  );
  
};

//React Fragment 
// function App() {
  
//   return (
//     <>
//       <Title/>
//       <Description/>
//       <Source/>
//     </>
//   );
  
// };

export default App;
