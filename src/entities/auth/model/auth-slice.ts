import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IChangeEventProp } from 'app/store'
import { cloneObject } from 'shared/lib/object'
import { authInitialState } from './const'

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    handleUpdateValue: (state, action: PayloadAction<IChangeEventProp>) => {
      const { value, name, type } = action.payload

      const clonedState = cloneObject(state)
      clonedState[type][name] = value
      state = clonedState

      return state
    },
    signIn: state => {
      console.log(state.login.username, state.login.password)
    },
  },
})

export const { handleUpdateValue, signIn } = authSlice.actions
