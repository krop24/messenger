import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createChat, getChats } from 'entities/chat'

import { chatInitialState } from './const'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: chatInitialState,
  reducers: {
    handleChangeField: (state, action) => {
      const { name, value } = action.payload.target

      state[name as keyof typeof state] = value
    },
    handleCallOpen: state => {
      state.isCallOpen = !state.isCallOpen
    },
    clearMessages: state => {
      state.messages = []
    },
    setPeerConnection: (state, action: PayloadAction<RTCPeerConnection>) => {
      state.video.peerConnection = action.payload
    },
    setRemoteStreamId: (state, action: PayloadAction<string>) => {
      state.video.remoteStreamId = action.payload
    },
    setRoomId: (state, action: PayloadAction<string>) => {
      state.video.roomId = action.payload
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.video.userId = action.payload
    },
    handleCall: state => {
      state.call = {
        ...state.call,
        isCalling: false,
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getChats.fulfilled, (state, action) => {
      if (action.payload?.length) {
        state.chats = action.payload
      }
    })

    builder.addCase(createChat.fulfilled, (state, action) => {
      if (action.payload?.id) {
        state.chatId = action.payload.id
      }
    })

    builder.addCase('chatMessages', (state, action) => {
      if (action.payload?.length) {
        state.messages = action.payload
      }
    })

    builder.addCase('newMessage', (state, action) => {
      if (action.payload) {
        state.messages.push(action.payload)
      }
    })

    builder.addCase('incomingCall', (state, action) => {
      if (action.payload) {
        state.call = {
          ...action.payload,
          isCalling: true,
        }
      }
    })
  },
})

export const {
  setRemoteStreamId,
  setPeerConnection,
  handleCall,
  setRoomId,
  setUserId,
  handleChangeField,
  clearMessages,
  handleCallOpen,
} = chatSlice.actions
