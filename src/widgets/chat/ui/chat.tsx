import { ChangeEvent, useEffect } from 'react'
import clsx from 'clsx'
import { authSelector } from 'entities/auth'
import {
  chatStoreSelector,
  handleCall,
  handleCallOpen,
  handleChangeField,
  IMessage,
  VideoCallModal,
} from 'entities/chat'
import { userStoreSelector } from 'entities/user'
import { useDebounce } from 'shared/lib/debounce'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { Avatar } from 'shared/ui/avatar'
import { Button, EButtonType } from 'shared/ui/button'
import { IconButton } from 'shared/ui/icon'

import './chat.scss'

export const Chat = () => {
  const dispatch = useAppDispatch()

  const {
    user: { chatUser },
  } = useAppSelector(userStoreSelector)

  const { user } = useAppSelector(authSelector)
  const {
    chatId,
    message,
    messages,
    call: { isCalling, host },
  } = useAppSelector(chatStoreSelector)

  const [connectToChat] = useDebounce(() => {
    dispatch({ type: 'joinRoom', payload: { chatId } })
  }, 500)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target

    dispatch(handleChangeField({ target: { name, value } }))
  }

  const handleSend = () => {
    dispatch({ type: 'message', payload: { chatId, message, sender: user.username } })

    dispatch(handleChangeField({ target: { name: 'message', value: '' } }))
  }

  const handleOpenVideo = () => {
    dispatch(handleCall())
    dispatch(handleCallOpen())
    dispatch({
      type: 'call',
      payload: { chatId, sender: user.username, host: chatUser.username },
    })
  }

  useEffect(() => {
    if (chatId) {
      connectToChat()
    }
  }, [chatId])

  return (
    <div className="chat">
      <VideoCallModal />
      <div className="chat__header">
        <Avatar
          src={chatUser.photo ?? '/assets/img/avatar-abstract.jpg'}
          name={clsx(chatUser.firstName, chatUser.lastName)}
          className="chat__avatar"
        />
        <div className="chat__info">
          <div className="chat__name">{clsx(chatUser.firstName, chatUser.lastName)}</div>
          <div className="chat__status chat__status_online">Online</div>
        </div>
        <div
          className={clsx(
            'chat__video',
            isCalling && host === user.username && 'chat__video-call',
          )}
        >
          <IconButton
            onClick={handleOpenVideo}
            icon="fa-solid fa-video"
            className="text-primary-400"
          />
        </div>
      </div>

      <div className="chat__area-wrapper">
        <div className="chat__area">
          {messages.map(({ sender, message, timestamp }: IMessage, i: number) =>
            sender !== user.username ? (
              <div className="chat__message" key={`${sender}-${i}`}>
                <Avatar
                  src={chatUser.photo ?? '/assets/img/avatar-abstract.jpg'}
                  className="chat__message-avatar"
                  name="Travis Barker"
                />
                <div className="chat__message-content">
                  <div className="chat__message-text">{message}</div>
                  <div className="chat__message-time">
                    {new Date(timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="chat__message chat__message_right"
                key={`${user.username}-${i}`}
              >
                <div className="chat__message-content">
                  <div className="chat__message-text">{message}</div>
                  <div className="chat__message-time">
                    {new Date(timestamp).toLocaleTimeString()}
                  </div>
                </div>

                <Avatar
                  src="/assets/img/avatar-abstract.jpg"
                  className="chat__message-avatar"
                  name="Travis Barker"
                />
              </div>
            ),
          )}
        </div>
      </div>

      <div className="chat__textarea">
        <textarea
          placeholder="Сообщение"
          name="message"
          value={message}
          onChange={handleChange}
          className="chat__textarea-input"
        />
        <Button className="!w-fit" variant={EButtonType.default} onClick={handleSend}>
          Отправить сообщение
        </Button>
      </div>
    </div>
  )
}
