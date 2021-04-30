import React from "react";
import s from './Post.module.css'
import {useDispatch} from 'react-redux'
import {deletePostAction} from '../../../redux/actions'

export const Post = (props) => {

    const dispatch = useDispatch();

    const deletePost = () => {
        dispatch(deletePostAction(props.info.id))
    }
    return(
        <div className={s.main}>
            <div className={s.info}>
                {props.info.name + ':'}
                <div className={s.phone}>
                    {props.info.phone}
                </div>
            </div>
            <button onClick={deletePost} className={s.del_btn}>+</button>
        </div>
    )
}