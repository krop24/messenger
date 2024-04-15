import { createSlice } from '@reduxjs/toolkit'
import { snackbarInitialState } from './const'

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: snackbarInitialState,
  reducers: {},
})
