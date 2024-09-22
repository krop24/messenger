import { createSelector } from '@reduxjs/toolkit'

export const chatStoreSelector = createSelector(
  (state: RootState) => state,
  state => state.chat,
)
