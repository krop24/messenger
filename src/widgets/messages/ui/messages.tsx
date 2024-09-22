import { ChangeEvent, useEffect } from 'react'
import clsx from 'clsx'
import { authSelector, IUser } from 'entities/auth'
import {
  chatStoreSelector,
  clearMessages,
  createChat,
  getChats,
  handleChangeField,
  IChat,
} from 'entities/chat'
import { getUsers, setChatUser, userStoreSelector } from 'entities/user'
import { useDebounce } from 'shared/lib/debounce'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { Icon } from 'shared/ui/icon'

import './messages.scss'

export const Messages = () => {
  const dispatch = useAppDispatch()

  const { user } = useAppSelector(authSelector)
  const {
    users,
    user: { chatUser },
  } = useAppSelector(userStoreSelector)
  const { search, chats } = useAppSelector(chatStoreSelector)

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(handleChangeField({ target: { name, value } }))
  }

  const handleCreateChat = (chatUser: IUser | IChat) => {
    dispatch(setChatUser(chatUser))
    dispatch(clearMessages())
    dispatch(createChat([user.username, chatUser.username]))
  }

  const [debouncedGetUsers] = useDebounce(() => dispatch(getUsers({ search })), 800)
  const [debouncedGetChats] = useDebounce(() => dispatch(getChats()), 100)

  useEffect(() => {
    debouncedGetUsers()
  }, [search])

  useEffect(() => {
    debouncedGetChats()
  }, [])

  const chatArr = users?.length ? users : chats

  return (
    <div className="messages">
      <h2 className="messages__title">Сообщения</h2>

      <label htmlFor="search" className="messages__search">
        <span className="hidden">Search</span>
        <Icon icon="search" className="messages__search-icon" />
        <input
          value={search}
          onChange={handleChangeSearch}
          id="search"
          name="search"
          type="text"
          placeholder="Поиск"
        />
      </label>

      <div className="messages__filter" />

      <div className="messages__list">
        {chatArr.map((arrUser: IUser | IChat) => (
          <button
            type="button"
            className={clsx(
              'messages__item',
              chatUser?.username === arrUser?.username && 'messages__item_active',
            )}
            key={arrUser.username}
            onClick={() => handleCreateChat(arrUser)}
          >
            <div className="messages__avatar">
              <img
                src={arrUser.photo ?? '/assets/img/avatar-abstract.jpg'}
                alt={clsx(arrUser.firstName, arrUser.lastName)}
                width={36}
                height={36}
              />
            </div>

            <div className="messages__content">
              <div className="messages__header">
                <div className="messages__name">
                  {clsx(arrUser.firstName, arrUser.lastName)}
                </div>
                <div className="messages__time">
                  {arrUser?.timestamp
                    ? new Date(arrUser?.timestamp).toLocaleTimeString()
                    : ''}
                </div>
              </div>

              <div className="messages__text">{arrUser?.lastMessage ?? ''}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
