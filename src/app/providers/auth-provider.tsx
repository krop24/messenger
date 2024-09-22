import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { authSelector, checkAuth, checkToken } from 'entities/auth'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'

import { projectRoutes } from '../router'

export const AuthProvider = () => {
  const dispatch = useAppDispatch()

  const location = useLocation()
  const navigate = useNavigate()

  const { token } = useAppSelector(authSelector)

  useEffect(() => {
    if (token) {
      dispatch(checkAuth())
    }

    if (
      !token &&
      ![projectRoutes.signIn, projectRoutes.registration].includes(location.pathname)
    ) {
      navigate(projectRoutes.signIn)
    }
  }, [token])

  useEffect(() => {
    dispatch(checkToken())
  }, [])

  return <div />
}
