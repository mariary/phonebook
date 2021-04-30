import {ADD_POST, API_POST, DELETE_POST} from './types'

export function addPostAction(payload) {
    return{
        type: ADD_POST,
        payload
    }
}

export function deletePostAction(payload) {
    return{
        type: DELETE_POST,
        payload
    }
}

export function apiPostAction() {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()
        dispatch({type: API_POST, payload: json})
    }
}