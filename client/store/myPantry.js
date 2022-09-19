import axios from 'axios';

const GET_ITEMS = 'GET_ITEMS';
const UPDATE_ITEM = 'UPDATE_ITEM';

const pantryReducer = (state = [], action) => {
  if (action.type === GET_ITEMS) {
    return action.items;
  }
  if (action.type === UPDATE_ITEM) {
    const items = state.filter((item) => item.id !== action.item.id);
    return [ ...items, action.item ];
  }
  return state;
};

const _getItems = (items) => {
  return {
    type: GET_ITEMS,
    items
  };
};

const _updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    item
  };
};

export const getItems = (userId) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/pantryItems/user/${userId}`);
    const items = response.data;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      const responseDrinks = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${item.name}`);
      const drinksObj = responseDrinks.data;
      item.drinks = drinksObj.drinks;
    }
    dispatch(_getItems(items));
  };
};

export const updateItem = (item) => {
  return async (dispatch) => {
    const response = await axios.put(`/api/pantryItems/${item.id}`, item);
    const updatedItem = response.data;
    dispatch(_updateItem(updatedItem));
  };
};

export default pantryReducer;
