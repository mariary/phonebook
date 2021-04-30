import React from 'react'
import s from './Posts.module.css'
import {PostForm} from './PostForm/PostForm'
import {Post} from './Post/Post'
import {useSelector} from 'react-redux'

export const Posts = () => {
    const posts = useSelector(state => state.posts.posts)
    return (
        <div className={s.main}>
            <PostForm/>
            <div className={s.list}>
                {posts.map(task => <Post info={task} key={task.id}/>)}
            </div>
        </div>
    )
}