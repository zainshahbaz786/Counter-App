// now we have to handle all of the react states here in this index.js file here
import {createStore} from 'redux'

const reducerFunc=(state={counter:0}, action)=>{
//state is a state which we will provide
//action have two properties TYPE and PayLoad

// reducerFunc is a synchronous function
// we should not mutate the orignal state

if (action.type==="INC"){
    return {counter:state.counter + 1};
}

else if (action.type==="DEC"){
    return {counter:state.counter - 1};
}

else if (action.type==="ADD"){
    return {counter:state.counter + 10}; 
}

return state;


}

const store=createStore(reducerFunc)

export  {store};





