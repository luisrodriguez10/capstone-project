import axios from 'axios';

const recipes = ( state = [], action) => {
  if(action.type === 'SET_RECIPES'){
    if (!action.recipes) {
      return state;
    }
    return action.recipes
  }
  return state;
};

export const fetchRecipes = () => {
  return async(dispatch) => {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    dispatch({ type: 'SET_RECIPES', recipes: response.data })

  }
}

export default recipes;