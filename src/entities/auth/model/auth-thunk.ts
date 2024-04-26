import { createAsyncThunk } from '@reduxjs/toolkit'
import { handleLoading } from 'entities/snackbar'
import { api, apiUrls } from 'shared/api'
import { formatError } from 'shared/lib/object'

import { authActions } from './const'
import { ILogin, IRegistration } from './types'

export const handleRegister = createAsyncThunk(
  authActions.register,
  async (data: IRegistration, thunkAPI) => {
    try {
      thunkAPI.dispatch(handleLoading(true))

      const requestData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        password: data.password,
      }

      const response = await api.post(apiUrls.auth.register, requestData)
      thunkAPI.dispatch(handleLoading(false))

      return response.data
    } catch (e) {
      thunkAPI.dispatch(handleLoading(false))
      return thunkAPI.rejectWithValue(formatError(e))
    }
  },
)

export const handleLogin = createAsyncThunk(
  authActions.login,
  async (data: ILogin, thunkAPI) => {
    try {
      thunkAPI.dispatch(handleLoading(true))

      const requestData = {
        username: data.username,
        password: data.password,
      }

      const response = await api.post(apiUrls.auth.login, requestData)
      thunkAPI.dispatch(handleLoading(false))

      return response.data
    } catch (e) {
      thunkAPI.dispatch(handleLoading(false))
      return formatError(e)
    }
  },
)

export const checkAuth = createAsyncThunk(authActions.check, async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(handleLoading(true))
    const response = await api.get(apiUrls.auth.check)
    thunkAPI.dispatch(handleLoading(false))

    return response.data
  } catch (e) {
    thunkAPI.dispatch(handleLoading(false))
    return formatError(e)
  }
})
