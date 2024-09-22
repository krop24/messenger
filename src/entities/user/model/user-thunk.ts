import { createAsyncThunk } from '@reduxjs/toolkit'
import { handleLoading } from 'entities/snackbar'
import { api, apiUrls } from 'shared/api'
import { formatError } from 'shared/lib/object'

import { userActions } from './const'
import { IGetUserProps } from './types'

export const getUser = createAsyncThunk(
  userActions.getUser,
  async (data: IGetUserProps, thunkAPI) => {
    try {
      thunkAPI.dispatch(handleLoading(true))

      const response = await api.get(`${apiUrls.user}/${data.username}`)
      thunkAPI.dispatch(handleLoading(false))

      return response.data
    } catch (e) {
      thunkAPI.dispatch(handleLoading(false))
      return formatError(e)
    }
  },
)

export const getUsers = createAsyncThunk(
  userActions.getUsers,
  async (data: { search: string }) => {
    try {
      if (!data.search) {
        return []
      }

      const response = await api.post(`${apiUrls.user}/list`, data)
      return response.data
    } catch (e) {
      return formatError(e)
    }
  },
)
