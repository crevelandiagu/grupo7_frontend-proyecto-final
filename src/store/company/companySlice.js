import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    status: null,
    view: 'dashboard',
    errorMessage: null,
  },
  reducers: {
    showView: (state, {payload}) => {
      state.view = payload.view;
      state.errorMessage = undefined;
    },
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
export const { showView, checking, signup, signin, logout, clearErrorMessages, checkingCredentials } = companySlice.actions