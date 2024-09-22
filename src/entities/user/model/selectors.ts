import { createSelector } from '@reduxjs/toolkit'

export const userStoreSelector = createSelector(
  (state: RootState) => state,
  state => state.user,
)
