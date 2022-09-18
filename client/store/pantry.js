import axios from 'axios'

const pantry = ( state = [], action ) => {
  if(action.type === 'SET_PANTRY') {
    state = action.pantry
  }
  return state;
}

export const fetchPantry = ( user ) => {
  return async(dispatch) => {
    const response = await axios.get(`/api/pantryItems/user/${ user.id }`);
    dispatch({ type: 'SET_PANTRY', pantry: response.data })
  }
}

export default pantry;