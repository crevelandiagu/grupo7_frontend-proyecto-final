import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', //'checking',
    id: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    checking: (state) => {
      state.status = 'checking';
      state.user   = null;
      state.errorMessage = undefined;
    },
    signup: (state, {payload}) => {
      state.status = 'authenticated';
      state.id   = payload.id;
      state.email = payload.email;
      // state.user   = payload.user;
      state.errorMessage = undefined;
      
    },
    signin: (state, {payload}) => {
      state.status = 'authenticated';
      state.id   = payload.id;
      state.email = payload.email;
      // state.user   = payload.user;
      state.errorMessage = undefined;
    },
    logout: (state, {payload}) => {
      console.log('payload-logout', payload)
      state.status = 'not-authenticated';
      state.user   = null;
      state.errorMessage = payload;
      
    },
    clearErrorMessages: (state) => {
      state.errorMessage = undefined;
    },
    // checkingCredentials: (state) => {
    //   state.status = 'checking';
    // },
  },
})

// Action creators are generated for each case reducer function
export const { checking, signup, signin, logout, clearErrorMessages, checkingCredentials } = authSlice.actions