import axios from "axios";

const myDrinks = (state = [], action) =>{
    if(action.type === 'SET_MY_DRINKS'){
        state = action.myDrinks
    }
    if(action.type === 'UPDATE_MY_DRINK'){
        state = state.map(drink => drink.id !== action.myDrink.id ? drink : action.myDrink)
    }
    if(action.type === 'DELETE_MY_DRINK'){
        state = state.filter(drink => drink.id !== action.myDrink.id)
    }
    if(action.type === 'CREATE_MY_DRINK'){
        return [...state, action.myDrink]
    }
    return state;
}

export const fetchMyDrinks = (user) =>{
    return async (dispatch) => {
        const response  = await axios.get(`/api/myDrinks/${user.id}`);
        dispatch({ type: 'SET_MY_DRINKS', myDrinks: response.data })
    }
}

export const deleteMyDrink = (drink) => {
    return async(dispatch) =>{
        await axios.delete(`/api/myDrinks/${drink.id}`)
        dispatch({ type: "DELETE_MY_DRINK", myDrink: drink })
    }
}

export const updateMyDrink = (drink, history) =>{
    return async (dispatch) => {
        const response  = await axios.put(`/api/myDrinks/${drink.id}`, drink);
        dispatch({ type: 'UPDATE_MY_DRINK', myDrink: response.data })
        history.push('/myDrinks')
    }
}

export const createMyDrink = (drink, user) => {
    return async(dispatch) => {
        drink.userId = user;
        const response  = await axios.post('/api/myDrinks', drink);
        dispatch({ type: 'CREATE_MY_DRINK', myDrink: response.data })
    }
}

export default myDrinks;