// state count:0
// action : increment decrement (object type- payload)
// reducer 
// store

const { createStore } = require("redux");

// NAMING CONSTANT
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const RESET = 'RESET';

// decalare a state
const initialCount = {
    count: 0
}
// action declare
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
const incrementByValue = (value) =>{
    return{
        type: INCREMENT_BY_VALUE,
        payload: value,
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
        case INCREMENT_BY_VALUE:
            return{
                ...state,
                count: state.count + action.payload
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
// store.dispatch(incrementCount());
// store.dispatch(incrementCount());
// store.dispatch(resetCount())
// store.dispatch(incrementCount());
// store.dispatch(decrementCount())
store.dispatch(incrementByValue(5))
store.dispatch(incrementByValue(10))