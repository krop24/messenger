import { useEffect } from 'react'
import clsx from 'clsx'
import { authSelector } from 'entities/auth'
import { getUser, userStoreSelector } from 'entities/user'
import { useDebounce } from 'shared/lib/debounce.ts'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { Button } from 'shared/ui/button'
import { TextField } from 'shared/ui/text-field'

import './profile-page.scss'

export const ProfilePage = () => {
  const dispatch = useAppDispatch()

  const { user } = useAppSelector(authSelector)

  const {
    user: { current },
  } = useAppSelector(userStoreSelector)

  const handleSave = () => {
    //
  }

  const [debounceGetUser] = useDebounce(() => {
    if (user.username) {
      dispatch(
        getUser({
          username: user.username,
        }),
      )
    }
  }, 100)

  useEffect(() => debounceGetUser(), [])

  return (
    <div className="profile">
      <div className="profile__header">
        <img
          width={50}
          height={50}
          src={current?.photo ?? '/assets/img/avatar-abstract.jpg'}
          alt={clsx(current?.firstName, current?.lastName) ?? 'User'}
          className="profile__avatar"
        />
        <div className="profile__name">{clsx(current?.firstName, current?.lastName)}</div>
      </div>
      <form className="profile__form" action="#">
        <div className="profile__fields">
          <TextField
            className="profile__field"
            name="username"
            label="Username"
            placeholder="username"
            value={current.username}
            disabled
          />
          <TextField
            className="profile__field"
            name="email"
            label="Email"
            placeholder="Email"
            value={current.email}
          />
          <TextField
            className="profile__field"
            name="firstName"
            label="First name"
            placeholder="Enter first name"
            value={current.firstName}
          />
          <TextField
            className="profile__field"
            name="lastName"
            label="Last name"
            placeholder="Enter last name"
            value={current.lastName}
          />
        </div>
        <Button className="profile__form-button" onClick={handleSave}>
          Сохранить
        </Button>
      </form>
    </div>
  )
}
