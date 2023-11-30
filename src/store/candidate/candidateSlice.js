import { createSlice } from '@reduxjs/toolkit'

export const candidateSlice = createSlice({
  name: 'candidate',
  initialState: {   
    status: null,
    view: 'dashboard',
    candidates: [],
    errorMessage: null,
  },
  reducers: {
    showView: (state, {payload}) => {
      state.view   = payload.view;
      state.errorMessage = undefined;
    },
  },
})

// Action creators are generated for each case reducer function
export const { showView } = candidateSlice.actions