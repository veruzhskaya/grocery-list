
import './App.css';
import image from './shopping.jpg';
import imageTwo from './man.jpg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='app' >
      <div className="container">
    <img className='picture' src={image} width="200" alt='shopping' />
    </div>
    <div className="container">
    <h1>Grocery List</h1> 
    </div> 
    <GroceryList/> 
    <div className="container">  
    <img className='picture' src={imageTwo} width="200" alt='man'/>
    </div>
    </div>
  );
}

export default App;
