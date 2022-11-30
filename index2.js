// state count:0
// action : increment decrement (object type- payload)
// reducer 
// store

const { createStore } = require("redux");

// NAMING CONSTANT
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// decalare a state
const initialCount = {
    count: 0
}
// action for increment
const incrementCount = () =>{
    return{
        type: INCREMENT
    }
}
const decrementCount = () =>{
    return{
        type: DECREMENT
    }
}
const resetCount = () =>{
    return{
        type: RESET
    }
}

// declare reducer
const counterReducer = (state=initialCount, action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
        case RESET:
            return{
                ...state,
                count: 0
            }
        default:
            state;
    }
}

// store declare kora
const store = createStore(counterReducer);

store.subscribe( () =>{
    console.log(store.getState());
})
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(resetCount())
store.dispatch(incrementCount());
store.dispatch(decrementCount())