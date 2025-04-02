import {useDispatch} from "react-redux"
import {addTodo, removeTodo} from "./store/todoSlice"
import {useCallback} from "react"
import { nanoid } from "@reduxjs/toolkit";



export const useAddTodo = () => {
    const dispatch = useDispatch()
    return (title, content) => {
        const todo = {
            id : nanoid(),
            title : title,
            content : content
        }
        dispatch(addTodo(todo))
    }
}

export const useRemoveTodo = () => {
    const dispatch = useDispatch()
    return (id) => {
        dispatch(removeTodo({id}))
    }
}



 