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

export const fetchRecipes = ( search ) => {
  return async(dispatch) => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ search }`)
    dispatch({ type: 'SET_RECIPES', recipes: response.data })

  }
}

export default recipes;