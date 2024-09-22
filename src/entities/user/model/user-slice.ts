import { createSlice } from '@reduxjs/toolkit'

import { userSliceInitialState } from './const'
import { getUser, getUsers } from './user-thunk'

export const userSlice = createSlice({
  name: 'user',
  initialState: userSliceInitialState,
  reducers: {
    setChatUser: (state, action) => {
      state.user.chatUser = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload?.username) {
        state.user.current = action.payload
      }
    })

    builder.addCase(getUsers.fulfilled, (state, action) => {
      if (action.payload?.length) {
        state.users = action.payload
      } else {
        state.users = []
      }
    })
  },
})

export const { setChatUser } = userSlice.actions
