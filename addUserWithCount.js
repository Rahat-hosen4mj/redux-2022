// state / initial state (count: 1, namea: 'Rahat')
// action // its a object( type, payload)
// reducer // main functionality
// store // store it to the document

const { createStore } = require("redux");

// NAMING CONSTANT
const USER_INCREMENT_BY_COUNTER = 'USER_INCREMENT_BY_COUNTER';
const USER_DECREMENT_BY_COUNTER = 'USER_DECREMENT_BY_COUNTER'

// state declare
const initialUserCounter = {
    users: ['Rahat'],
    count: 1
}

// action declare
const addUser = (user) =>{
    return{
        type: USER_INCREMENT_BY_COUNTER,
        payload: user
    }
}
const decrementUser = (user) =>{
    return{
        type: USER_DECREMENT_BY_COUNTER,
        payload: user
    }
}
// create Reducer
const userReducer = (state= initialUserCounter, action) =>{
    switch (action.type) {
        case USER_INCREMENT_BY_COUNTER:
            return{
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        case  USER_DECREMENT_BY_COUNTER:
            return{
               
                
                users:[ ... state.users],
                count: state.count - 1
            }
            
    
        default:
            state;
    }
}

// store 
const store = createStore(userReducer);
store.subscribe(() =>{
    console.log(store.getState())
});
store.dispatch(addUser('rabit'));
store.dispatch(addUser('rakib'));
store.dispatch(addUser('jahid'));
store.dispatch(decrementUser('rakib'));

