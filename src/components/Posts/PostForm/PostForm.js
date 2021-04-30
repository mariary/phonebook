import React, {useState} from 'react'
import s from './PostForm.module.css'
import {useDispatch} from 'react-redux'
import {addPostAction} from '../../../redux/actions'

export const PostForm = () => {

    const dispatch = useDispatch()
    const [post, setPost] = useState('')
    const [phone, setPhone] = useState('')

    const addPost = (post, phone) => {
        if (post && phone) {
            const item = {
                name: post,
                phone: phone,
                id: Date.now()
            }
            dispatch(addPostAction(item))
            setPost('')
            setPhone('')
        }
    }
    const postOnChange = e => {
        e.preventDefault()
        setPost(e.target.value)
    }
    const phoneOnChange = e => {
        if (!isNaN(e.target.value)) {
            e.preventDefault()
            setPhone(e.target.value)
        }
    }
    return (
        <div className={s.main}>
            <form onSubmit={(e) => {
                e.preventDefault()
                addPost(post, phone)
            }}
                  className={s.form}>
                <div className={s.input_wrapper}>
                    <input
                        className={s.input}
                        type="text"
                        value={post}
                        onChange={postOnChange}
                        placeholder='Введите имя'
                    />
                    <input
                        className={s.input}
                        type="text"
                        value={phone}
                        onChange={phoneOnChange}
                        placeholder='Введите номер'
                    />
                </div>
                <button className={s.del_btn}>+</button>
            </form>
        </div>
    )
}