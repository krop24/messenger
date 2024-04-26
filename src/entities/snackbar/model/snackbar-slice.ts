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
  },
})

export const { handleLoading } = snackbarSlice.actions
