import { ChangeEvent, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { projectRoutes } from 'app/router'
import {
  authSelector,
  handleRegister,
  handleUpdateValue,
  IRegistration,
  registrationSelector,
  validateRegistration,
} from 'entities/auth'
import { validateObjectFields } from 'shared/lib/object'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { Button } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'
import { TextField } from 'shared/ui/text-field'

import './registration-page.scss'

export const RegistrationPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { username, password, repeatPassword, email, firstName, lastName, error } =
    useAppSelector(registrationSelector)
  const { token, isRegistered } = useAppSelector(authSelector)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      handleUpdateValue({
        value: e.target.value,
        name: e.target.name,
        type: 'registration',
      }),
    )

  const handleSubmit = () => {
    dispatch(validateRegistration())

    const fields = {
      username,
      password,
      repeatPassword,
      email,
      firstName,
      lastName,
    }

    if (validateObjectFields(fields)) {
      const data: IRegistration = {
        ...fields,
        photo: null,
        error,
      }

      dispatch(handleRegister(data))
    }
  }

  useEffect(() => {
    if (token) {
      navigate(projectRoutes.chat)
    }
  }, [token])

  return (
    <div className="registration">
      <div className="h-full w-1/2 hidden lg:block">
        <img
          className="h-full w-full object-cover"
          width={250}
          height={250}
          alt="Shining sky"
          src="/assets/img/red-plant.jpg"
        />
      </div>
      <div className="h-full w-full p-6 flex lg:w-1/2">
        {isRegistered ? (
          <div className="registration__success">
            <Icon
              className="registration__success-icon"
              icon="fa-regular fa-circle-check"
            />
            <h1 className="registration__title">Вы успешно зарегистрированы.</h1>
            <Link className="registration__success-link" to={projectRoutes.signIn}>
              Войти
            </Link>
          </div>
        ) : (
          <form action="#" className="registration__form">
            <h1 className="registration__title">Registration.</h1>
            <div className="flex flex-wrap gap-4">
              <TextField
                value={firstName}
                onChange={handleChange}
                label="Имя"
                className="w-full md:w-[calc(50%-0.5rem)]"
                name="firstName"
                placeholder="Введите имя"
                hasError={error.firstName}
              />
              <TextField
                onChange={handleChange}
                value={lastName}
                className="w-full md:w-[calc(50%-0.5rem)]"
                label="Фамилия"
                name="lastName"
                placeholder="Введите фамилию"
                hasError={error.lastName}
              />
              <TextField
                value={username}
                onChange={handleChange}
                className="w-full md:w-[calc(50%-0.5rem)]"
                label="Логин"
                name="username"
                placeholder="Введите логин"
                hasError={error.username}
              />
              <TextField
                value={email}
                onChange={handleChange}
                className="w-full md:w-[calc(50%-0.5rem)]"
                label="Email"
                name="email"
                placeholder="Введите email"
                errorText="Введите правильный email"
                hasError={error.email}
              />
              <TextField
                value={password}
                onChange={handleChange}
                className="w-full"
                label="Пароль"
                name="password"
                placeholder="Введите пароль"
                type="password"
                hasError={error.password}
              />
              <TextField
                value={repeatPassword}
                onChange={handleChange}
                className="w-full"
                label="Повторите пароль"
                name="repeatPassword"
                placeholder="Введите пароль"
                type="password"
                errorText="Введите пароль повторно"
                hasError={error.repeatPassword}
              />
            </div>
            <Button className="w-full" onClick={handleSubmit}>
              Зарегистрироваться
            </Button>

            <div className="w-full text-center">
              Зарегистрированы?&nbsp;
              <Link className="inline-block" to={projectRoutes.signIn}>
                Войти
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
