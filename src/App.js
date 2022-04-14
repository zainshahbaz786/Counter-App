import { useSelector,useDispatch } from 'react-redux';
import './App.css';


//useDispatch function will help us to dispatch the function
function App() {
const counter=useSelector((state)=>state.counter);
const dispatch=useDispatch(); 
const increment=()=>{
  dispatch({type:'INC'});
}

const decrement=()=>{
dispatch({type:"DEC"});
}


const addBy=()=>{
  dispatch({type:"ADD",payload:10});
}

  return (
    <div>
   <h1>Counter Store</h1>
   <h2>   {counter}      </h2>
    <button onClick={increment}>Increment Here </button>
    <button onClick={decrement}>Decrement Here</button>
    <button onClick={addBy}>Add BY 10</button>
    
    </div>
  );
}

// the thing that we learn is data is being send from app.js to the index.js(i.e in Store) Store
//data move from app.js-->store(index.js)

export default App;
