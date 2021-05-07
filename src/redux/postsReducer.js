import {ADD_POST, DELETE_POST} from './types'

const initialState = {
    posts: [{name:'Alice', id:'1', phone:'8 800 222 35 35'},{name:'Mike', id:'2', phone:'666 66 66' }],
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}