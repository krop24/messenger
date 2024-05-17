import { ChangeEvent, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { projectRoutes } from 'app/router'
import {
  authSelector,
  handleLogin,
  handleUpdateValue,
  loginSelector,
  validateLogin,
} from 'entities/auth'
import { validateObjectFields } from 'shared/lib/object'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { Button } from 'shared/ui/button'
import { Logo } from 'shared/ui/logo'
import { TextField } from 'shared/ui/text-field'

import './sign-in.scss'

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { username, password, error } = useAppSelector(loginSelector)
  const { token } = useAppSelector(authSelector)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      handleUpdateValue({ value: e.target.value, name: e.target.name, type: 'login' }),
    )

  const handleSignIn = () => {
    dispatch(validateLogin())

    const data = {
      username,
      password,
      error,
    }

    if (validateObjectFields(data)) {
      dispatch(handleLogin(data))
    }
  }

  useEffect(() => {
    if (token) {
      navigate(projectRoutes.chat)
    }
  }, [token])

  return (
    <div className="sign-in">
      <div className="h-full w-full p-6 flex lg:w-1/2">
        <form className="sign-in__form">
          <Logo className="flex mx-auto text-primary-400 w-32" />
          <h1 className="text-center mb-4">Войти в Whisper</h1>
          <TextField
            onChange={handleChange}
            label="Username"
            value={username}
            name="username"
            hasError={error.username}
            placeholder="Enter username"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={password}
            label="Password"
            placeholder="Enter password"
            type="password"
            hasError={error.password}
          />
          <Button onClick={handleSignIn}>Войти</Button>

          <div className="w-full text-center">
            Не зарегистрированы?&nbsp;
            <Link className="inline-block" to={projectRoutes.registration}>
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </div>

      <div className="h-full w-1/2 hidden lg:block">
        <img
          className="h-full w-full object-cover"
          width={250}
          height={250}
          alt="Shining sky"
          src="/assets/img/building.jpg"
        />
      </div>
    </div>
  )
}
