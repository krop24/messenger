import { Chat } from 'widgets/chat'
import { Messages } from 'widgets/messages'

export const ChatPage = () => {
  return (
    <div className="flex h-full">
      <div className="w-full max-w-[400px]">
        <Messages />
      </div>

      <div className="grow">
        <Chat />
      </div>
    </div>
  )
}
