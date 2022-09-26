import axios from 'axios'

const reviews = ( state = [], action ) => {
  if(action.type === 'SET_REVIEWS') {
    state = action.review
  }
  return state;
}

export const fetchReviews = ( id ) => {
  return async(dispatch) => {
    const response = await axios.get(`/api/reviews/drinks/${ id }`);
    dispatch({ type: 'SET_REVIEWS', review: response.data })
  }
}

export const fetchUserReviews = ( id ) => {
  return async(dispatch) => {
    const response = await axios.get(`/api/reviews/user/${ id }`);
    dispatch({ type: 'SET_REVIEWS', review: response.data })
  }
}

export default reviews;