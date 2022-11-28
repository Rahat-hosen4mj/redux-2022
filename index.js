// naming constant
const INCREMENT = "INCREMENT";
const DECCREMENT = "DECCREMENT";
const ADD_USER = "ADD_USER";


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
const addUser = () =>{
    return{
        type: ADD_USER,
        payload: [{name: "sakil"}],
    }
}

// how to declare state
// dicpatch action
// reducer
// store

// create a reducer for counter
const reduceCounter = ({state: initialCounterState, action}) =>{
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
    
        default:
            count;
    }
}