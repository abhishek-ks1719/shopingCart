import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let INITIAL_STATE =[]

const reducerFunction = (state=INITIAL_STATE,action)=>{
    
    switch(action.type){
        case "ADD":
            const newItem = {...action.data};
            for(let item of state){
                if(item.id===newItem.id){
                    return state
                }
            }
            state.push(newItem);
        // case "Delete":
            

        return state;
    }

}

const store = createStore(reducerFunction,composeWithDevTools());
export default store;