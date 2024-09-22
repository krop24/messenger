import { useNavigate } from 'react-router-dom'
import { projectRoutes } from 'app/router'
import { authSelector, handleOpenLogout, logout } from 'entities/auth'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { Button } from 'shared/ui/button'

import './logout.scss'

export const Logout = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const { isLogoutOpen } = useAppSelector(authSelector)

  const handleLogout = () => {
    dispatch(logout())
    navigate(projectRoutes.signIn)
  }

  return (
    isLogoutOpen && (
      <div className="logout">
        <button
          className="logout__overlay"
          type="button"
          aria-label="Logout"
          onClick={() => dispatch(handleOpenLogout())}
        />

        <div className="logout__content">
          <div className="logout__title">Выйти из приложения?</div>
          <div className="logout__buttons">
            <Button onClick={handleLogout}>Да</Button>
            <Button onClick={() => dispatch(handleOpenLogout())}>Нет</Button>
          </div>
        </div>
      </div>
    )
  )
}
