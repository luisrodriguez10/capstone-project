const coordinates = (state = [], action) =>{
    if(action.type === 'CREATE_COORDINATES'){
        return [...state, action.coordinate]
    }
    if(action.type === 'SET_COORDINATE'){
        return state;
    }
    return state;
}

export const createCoordinates = (coordinates) =>{

    const coordinate = {lat: coordinates.latitude * 1, lng: coordinates.longitude * 1}
    return (dispatch) =>{
        dispatch({type: 'CREATE_COORDINATES', coordinate: coordinate})
    }
}

export const fetchCoordinates = () =>{
    return async(dispatch) =>{
        dispatch({type: 'SET_COORDINATE'})
    }
}

export default coordinates;