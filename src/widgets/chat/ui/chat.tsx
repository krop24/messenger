import { Avatar } from 'shared/ui/avatar'
import { Button, EButtonType } from 'shared/ui/button'
import { IconButton } from 'shared/ui/icon'

import './chat.scss'

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src="/assets/img/avatar-abstract.jpg"
          name="Travis Barker"
          className="chat__avatar"
        />
        <div className="chat__info">
          <div className="chat__name">Travis Barker</div>
          <div className="chat__status chat__status_online">Online</div>
        </div>
        <div className="chat__video">
          <IconButton icon="fa-solid fa-video" className="text-primary-400" />
        </div>
      </div>

      <div className="chat__area-wrapper">
        <div className="chat__area">
          <div className="chat__message">
            <Avatar
              src="/assets/img/avatar-abstract.jpg"
              className="chat__message-avatar"
              name="Travis Barker"
            />
            <div className="chat__message-content">
              <div className="chat__message-text">Hello, how are you?</div>
              <div className="chat__message-time">16:51</div>
            </div>
          </div>
          <div className="chat__message">
            <Avatar
              src="/assets/img/avatar-abstract.jpg"
              className="chat__message-avatar"
              name="Travis Barker"
            />
            <div className="chat__message-content">
              <div className="chat__message-text">Can you do my homework?</div>
              <div className="chat__message-time">16:52</div>
            </div>
          </div>
          <div className="chat__message chat__message_right">
            <div className="chat__message-content">
              <div className="chat__message-text">Hello, I&apos;m fine, thank you!</div>
              <div className="chat__message-time">18:39</div>
            </div>

            <Avatar
              src="/assets/img/avatar-abstract.jpg"
              className="chat__message-avatar"
              name="Travis Barker"
            />
          </div>

          <div className="chat__message">
            <Avatar
              src="/assets/img/avatar-abstract.jpg"
              className="chat__message-avatar"
              name="Travis Barker"
            />
            <div className="chat__message-content">
              <div className="chat__message-text">Can you do my homework?</div>
              <div className="chat__message-time">18:40</div>
            </div>
          </div>
          <div className="chat__message chat__message_right">
            <div className="chat__message-content">
              <div className="chat__message-text">Lorem ipsum dolor sit amet</div>
              <div className="chat__message-time">12:39</div>
            </div>

            <Avatar
              src="/assets/img/avatar-abstract.jpg"
              className="chat__message-avatar"
              name="Travis Barker"
            />
          </div>
        </div>
      </div>

      <div className="chat__textarea">
        <textarea placeholder="Сообщение" className="chat__textarea-input" />
        <Button className="!w-fit" variant={EButtonType.default}>
          Отправить сообщение
        </Button>
      </div>
    </div>
  )
}
