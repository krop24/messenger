import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IChangeEventProp } from 'app/store'
import { checkAuth, handleLogin } from 'entities/auth'
import { cloneObject } from 'shared/lib/object'
import { isValidEmail, isValidString } from 'shared/lib/string'

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
    validateRegistration: state => {
      const fields = ['firstName', 'lastName', 'username', 'password', 'email']

      fields.forEach(field => {
        const errorKey = field as keyof typeof state.registration.error
        const fieldKey = field as keyof typeof state.registration

        if (fieldKey === 'email') {
          state.registration.error[errorKey] = !isValidEmail(
            state.registration[fieldKey] as string,
          )

          return
        }

        if (isValidString(state.registration[fieldKey] as string)) {
          state.registration.error[errorKey] = false
          return
        }

        state.registration.error[errorKey] = true
      })

      if (
        isValidString(state.registration.password) &&
        state.registration.password !== state.registration.repeatPassword
      ) {
        state.registration.error.repeatPassword = !isValidString(
          state.registration.repeatPassword,
        )
      } else {
        state.registration.error.repeatPassword = false
      }
    },
    validateLogin: state => {
      const fields = ['username', 'password']

      fields.forEach(field => {
        const errorKey = field as keyof typeof state.login.error
        const fieldKey = field as keyof typeof state.login

        if (isValidString(state.login[fieldKey] as string)) {
          state.login.error[errorKey] = false
          return
        }

        state.login.error[errorKey] = true
      })
    },
    checkToken: state => {
      const token = localStorage.getItem('token')

      if (token) {
        state.token = token
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      if (!action.payload.error) {
        state.token = action.payload.token

        localStorage.setItem('token', action.payload.token)
      }
    })

    builder.addCase(checkAuth.fulfilled, (state, action) => {
      if (!action.payload?.success) {
        localStorage.removeItem('token')
        state.token = null
      }
    })
  },
})

export const { checkToken, handleUpdateValue, validateRegistration, validateLogin } =
  authSlice.actions
