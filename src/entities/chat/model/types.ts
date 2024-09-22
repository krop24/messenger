export interface IChat {
  photo: Nullable<string>
  firstName: string
  lastName: string
  username: string
  lastMessage: string
}

export interface IMessage {
  sender: string
  message: string
  timestamp: string
}

export interface IChatSlice {
  search: string
  chatId: string
  isCallOpen: boolean
  call: {
    chatId: string
    sender: string
    host: string
    isCalling: boolean
  }
  video: {
    remoteStreamId: string
    peerConnection: RTCPeerConnection | null
    roomId: string
    userId: string
  }
  message: string
  messages: IMessage[]
  chats: IChat[]
}
