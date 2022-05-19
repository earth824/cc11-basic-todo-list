import { createSlice } from '@reduxjs/toolkit';
import { removeAccessToken, setAccessToken } from '../services/localStorage';
import axios from '../config/axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload?.user || null;
    },
    logout: state => {
      removeAccessToken();
      state.isAuthenticated = false;
    }
  }
});

// authSlice => { reducer: reducerFn, actions: { login: 'auth/login', logout: 'auth/logout' } }

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;

export const loginAsync = (username, password) => async dispatch => {
  const res = await axios.post('/users/login', { username, password });
  setAccessToken(res.data.token);
  dispatch(login()); // { type: '', payload:  }
};

export const initUser = () => async dispatch => {
  try {
    const res = await axios.get('/users');
    dispatch(login({ user: res.data.user }));
  } catch (err) {
    console.dir(err);
    // dispatch(logout());
  }
};

// const todoReducer = (state = { todos: [] }, action) => {
//   switch (action.type) {
//     case 'login': {
//       return { ...state, isAuthenticated: true };
//     }
//     case 'logout': {
//       return { ...state, isAuthenticated: false };
//     }
//     default: {
//     }
//   }
// };
