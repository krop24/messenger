import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { authSelector, checkAuth, checkToken } from 'entities/auth'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'

import { projectRoutes } from '../router'

interface IAuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const dispatch = useAppDispatch()

  const location = useLocation()
  const navigate = useNavigate()

  const { token } = useAppSelector(authSelector)

  useEffect(() => {
    if (
      !token &&
      ![projectRoutes.signIn, projectRoutes.registration].includes(location.pathname)
    ) {
      navigate(projectRoutes.signIn)
    }
  }, [token])

  dispatch(checkToken())

  if (token) {
    dispatch(checkAuth())
  }
  
  return children
}
