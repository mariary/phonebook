import {API_POST, DELETE_POST} from './types'

const initialState = {
    list: [],
}

export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case API_POST:
            return {...state, list: action.payload}
        case DELETE_POST:
            return {...state, list: state.list.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}