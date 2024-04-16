import { createSelector } from '@reduxjs/toolkit'
import { IAuthState } from './types'

export const authSelector = createSelector(
  (state: RootState) => state,
  state => state.auth
)

export const loginSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.login
)

export const registrationSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.registration
)

export const userSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.user
)
