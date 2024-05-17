import { createSelector } from '@reduxjs/toolkit'

export const snackbarSelector = createSelector(
  (state: RootState) => state,
  state => state.snackbar
)
