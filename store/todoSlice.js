import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{ id :1, title : "Your Todos", content : " "}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo: (state, action) => {
            const todo = {
                id : nanoid(),
                title : action.payload.title,
                content : action.payload.content
            }
            state.todos.push(todo)
        }
    }
})

export const {addTodo} = todoSlice.actions