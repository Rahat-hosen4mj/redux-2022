const {createStore} = require("redux")

// naming constant
const INCREMENT = "INCREMENT";
const DECCREMENT = "DECCREMENT";
const ADD_USER = "ADD_USER";
const INCREMENT_COUNTER_BY_VALUE = 'INCREMENT_COUNTER_BY_VALUE';


// declare state
const initialCounterState = {
    count: 0,
};
const initialUserState = {
    users: [{name: "anisul islam"}],
};

// action (function : type, payload)
const incrementCounter = () =>{
   return{
    type: INCREMENT,
   }
}
const decreementCounter = () =>{
   return{
    type: DECCREMENT,
   }
}
const incrementCounterByValue = (value) =>{
   return{
    type: INCREMENT_COUNTER_BY_VALUE,
    payload: value,
   }
}
const addUser = () =>{
    return{
        type: ADD_USER,
        payload: [{name: "sakil"}],
    }
}

// how to declare state
// dicpatch action
// reducer
// store er 3 tah method(getState(), dispatch(), subscribe())

// create a reducer for counter
const reduceCounter = (state = initialCounterState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            };
        case DECCREMENT:
            return{
                ...state,
                count: state.count - 1,
            }
        case INCREMENT_COUNTER_BY_VALUE:
            return{
                ...state,
                count: state.count + action.payload,
            }
    
        default:
            state;
    }
}
// create store
const store = createStore(reduceCounter);

// subscribe store
store.subscribe(() =>{
    console.log(store.getState());
})

// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decreementCounter());
store.dispatch(incrementCounterByValue(5))
