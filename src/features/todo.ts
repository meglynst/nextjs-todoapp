import { TodoI } from '../types';
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface TodoState {
  todos: TodoI[]
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [] } as TodoState,
  reducers: {
    add(state, action: PayloadAction<{ title: string }>) {
      state.todos.push({
        id: uuidv4(),
        title: action.payload.title,
        isDone: false
      })
    },
    remove(state, action: PayloadAction<{ id: string }>) {
      state.todos = state.todos.filter(t => t.id !== action.payload.id)
    },
    update(state, action: PayloadAction<{
      todo?: { title: string, isDone: boolean },
      id: string
    }>) {
      let idx = state.todos.findIndex(t => t.id === action.payload.id);
      state.todos[idx] = {
        ...state.todos[idx],
        ...action.payload.todo
      }
    },
    removeAll(state) {
      state.todos = []
    }
  }
});

export const {
  add,
  remove,
  update,
  removeAll
} = todoSlice.actions;
export default todoSlice.reducer;