import { createAsyncThunk } from '@reduxjs/toolkit'
import { api, apiUrls } from 'shared/api'
import { formatError } from 'shared/lib/object'

import { chatActions } from './const'

export const createChat = createAsyncThunk(
  chatActions.createChat,
  async (data: string[]) => {
    try {
      const response = await api.post(apiUrls.chat.chat, { participants: data })
      return response.data
    } catch (e) {
      return formatError(e)
    }
  },
)

export const getChats = createAsyncThunk(chatActions.getChats, async () => {
  try {
    const response = await api.get(apiUrls.chat.chats)
    return response.data
  } catch (e) {
    return formatError(e)
  }
})
