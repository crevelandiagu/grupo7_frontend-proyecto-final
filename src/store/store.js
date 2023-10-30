import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { candidateSlice } from './candidate/candidateSlice'

export const store =  configureStore({
  reducer: {
    auth: authSlice.reducer,
    candidate: candidateSlice.reducer,
  },
})