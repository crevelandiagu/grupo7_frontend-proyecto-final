import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'project',
  initialState: {
    id: null,
    name: undefined,
    describe: undefined,
  },
  reducers: {
    createProject: (state) => {
      state.id = 'checking';
      state.name   = null;
      state.describe = undefined;
      state.errorMessage = undefined;
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
export const { createProject } = authSlice.actions