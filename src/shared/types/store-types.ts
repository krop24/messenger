import { Action, ThunkAction } from '@reduxjs/toolkit'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
