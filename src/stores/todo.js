import { createSlice } from '@reduxjs/toolkit';
import axios from '../config/axios';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    getAllTodo: (state, action) => {
      state.todos = action.payload?.todos;
    },
    addTodo: (state, action) => {
      state.todos.unshift(action.payload.todo);
    }
  }
});

export default todoSlice.reducer;

export const { getAllTodo, addTodo } = todoSlice.actions;

export const fetchTodo = () => async dispatch => {
  try {
    const res = await axios.get('/todos');
    dispatch(getAllTodo({ todos: res.data.todos }));
  } catch (err) {
    throw err;
  }
};

export const createTodo = todo => async dispatch => {
  try {
    const res = await axios.post('/todos', { title: todo });
    // dispatch(fetchTodo());
    dispatch(addTodo({ todo: res.data.todo }));
  } catch (err) {}
};

// function createTodo(todo) {
//   return async function(dispatch) {

//   }
// }
