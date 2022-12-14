import axios from 'axios'
import history from '../history'

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH'

/**
 * ACTION CREATORS
 */
const setAuth = auth => ({type: SET_AUTH, auth})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

export const authenticate = (username, password, method, firstName, lastName, email, history) => async dispatch => {
  try {
    const res = method === 'login' ? await axios.post(`/auth/${method}`, {username, password}) : await axios.post(`/auth/${method}`, {id: Math.floor(Math.random() * (10000000 - 50) + 50), username, password, firstName, lastName, email})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
    history.push('/')
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
}

export const authenticateGmail = (profile, history) => async dispatch => {

  const username = profile.email;
  const firstName = profile.givenName;
  const lastName = profile.familyName;
  const email = profile.email;
  const password = Math.random().toString();

  try {
    const res = await axios.post('/auth/signup', {id: Math.floor(Math.random() * (10000000 - 50) + 50), username, password, firstName, lastName, email})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
    history.push('/')
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
}

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/')
  return {
    type: SET_AUTH,
    auth: {}
  }
}

/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth
    default:
      return state
  }
}
