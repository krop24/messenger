import { createSlice } from '@reduxjs/toolkit'

import { snackbarInitialState } from './const'

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: snackbarInitialState,
  reducers: {
    handleLoading: (state, action) => {
      state.loading =
        typeof action.payload === 'boolean' ? action.payload : !state.loading
    },
    showSnackbar: (state, action) => {
      state.open = true
      state.message = action.payload.message
      state.type = action.payload.type
    },
    closeSnackbar: state => {
      state.open = false
      state.message = ''
    },
  },
})

export const { handleLoading, showSnackbar, closeSnackbar } = snackbarSlice.actions
