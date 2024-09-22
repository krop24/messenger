import { IChatSlice } from './types'

export const chatInitialState: IChatSlice = {
  search: '',
  isCallOpen: false,
  messages: [],
  chats: [],
  chatId: '',
  message: '',
  call: {
    chatId: '',
    sender: '',
    host: '',
    isCalling: false,
  },
  video: {
    remoteStreamId: '',
    peerConnection: null,
    roomId: '',
    userId: '',
  },
}

export const chatActions = {
  createChat: 'chat/createChat',
  getChats: 'chats/getChats',
}
