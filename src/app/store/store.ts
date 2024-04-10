import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from 'app/store/reducers/auth'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})
