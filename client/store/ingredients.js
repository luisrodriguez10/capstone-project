import axios from "axios";

const ingredients = (state = [], action) =>{
  if(action.type === 'SET_INGREDIENTS'){
    state = action.ingredients
  }
  return state;
}

export const fetchIngredients = () =>{
  return async (dispatch) => {
    const response  = await axios.get('/api/ingredients');
    dispatch({ type: 'SET_INGREDIENTS', ingredients: response.data })
  }
}

export default ingredients;