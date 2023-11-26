import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    status: null,
    idCandidate: null,
    view: 'dashboard',
    errorMessage: null,
  },
  reducers: {
    showView: (state, {payload}) => {
      state.view = payload.view;
      state.errorMessage = undefined;
    },
    selectCandidate: (state, {payload}) => { 
      state.idCandidate = payload.idCandidate;
    },
    checking: (state) => {
      state.status = 'checking';
      state.user   = null;
      state.errorMessage = undefined;
    },
    clearErrorMessages: (state) => {
      state.errorMessage = undefined;
    },
  },
})

// Action creators are generated for each case reducer function
export const { showView, selectCandidate, clearErrorMessages } = companySlice.actions