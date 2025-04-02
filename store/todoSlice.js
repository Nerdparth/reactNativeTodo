import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{ id :1, title : "Your Todos", content : " "}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }        
    }
})

export const {addTodo, removeTodo} = todoSlice.actions