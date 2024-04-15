import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from 'entities/auth'
import { snackbarSlice } from 'entities/snackbar'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    snackbar: snackbarSlice.reducer,
  },
})
