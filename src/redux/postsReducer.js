import {ADD_POST, DELETE_POST} from './types'

const initialState = {
    posts: [{name:'lol', id:'1', phone:'999'},{name:'haha', id:'2', phone:'999' }],
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