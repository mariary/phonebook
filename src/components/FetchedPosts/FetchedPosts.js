import React from 'react'
import s from './FetchedPosts.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {apiPostAction} from '../../redux/actions'
import {Post} from '../Posts/Post/Post'

export const FetchedPosts = () => {
    const dispatch = useDispatch();
    const lists = useSelector(state => state.list.list)


    const apiPost = () => {
        dispatch(apiPostAction())
    }

    return (
        <div className={s.main}>
            <button onClick={apiPost} className={s.api_btn}>Получить контакты через API</button>
            <div className={s.list}>
                {lists.map(item => <Post info={item} key={item.id}/>)}
            </div>
        </div>
    )
}