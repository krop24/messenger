import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './messages.scss'

export const Messages = () => {
  return (
    <div className="messages">
      <h2 className="messages__title">Сообщения</h2>

      <label htmlFor="search" className="messages__search">
        <span className="hidden">Search</span>
        <FontAwesomeIcon icon={'search' as IconProp} className="messages__search-icon" />
        <input id="search" type="text" placeholder="Поиск" />
      </label>

      <div className="messages__filter" />

      <div className="messages__list">
        <div className="messages__item">
          <div className="messages__avatar">
            <img
              src="https://picsum.photos/50"
              alt="User avatar"
              width={36}
              height={36}
            />
          </div>

          <div className="messages__content">
            <div className="messages__header">
              <div className="messages__name">Имя Фамилия</div>
              <div className="messages__time">12:00</div>
            </div>

            <div className="messages__text">Сообщение</div>
          </div>
        </div>
        <div className="messages__item">
          <div className="messages__avatar">
            <img
              src="https://picsum.photos/51"
              alt="User avatar"
              width={36}
              height={36}
            />
          </div>

          <div className="messages__content">
            <div className="messages__header">
              <div className="messages__name">Имя Фамилия</div>
              <div className="messages__time">12:00</div>
            </div>

            <div className="messages__text">Сообщение</div>
          </div>
        </div>
      </div>
    </div>
  )
}
