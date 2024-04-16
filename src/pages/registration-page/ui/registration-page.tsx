import './registration-page.scss'
import { TextField } from 'shared/ui/text-field'
import { Button } from 'shared/ui/button'
import { useAppSelector } from 'shared/lib/store'
import { handleUpdateValue, registrationSelector } from 'entities/auth'
import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { projectRoutes } from 'app/router/const'

export const RegistrationPage = () => {
  const dispatch = useDispatch()
  const { username, password, repeatPassword, email, firstName, lastName } =
    useAppSelector(registrationSelector)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      handleUpdateValue({
        value: e.target.value,
        name: e.target.name,
        type: 'registration',
      })
    )

  return (
    <div className="registration">
      <div className="h-full w-1/2">
        <img
          className="h-full w-full object-cover"
          width={250}
          height={250}
          alt="Shining sky"
          src="/assets/img/red-plant.jpg"
        />
      </div>
      <div className="h-full w-1/2 p-6 flex">
        <form action="#" className="registration__form">
          <h1 className="registration__title">Registration.</h1>
          <div className="flex flex-wrap gap-4">
            <TextField
              value={firstName}
              onChange={handleChange}
              label="Имя"
              className="w-[calc(50%-0.5rem)]"
              name="firstName"
              placeholder="Введите имя"
            />
            <TextField
              onChange={handleChange}
              value={lastName}
              className="w-[calc(50%-0.5rem)]"
              label="Фамилия"
              name="lastName"
              placeholder="Введите фамилию"
            />
            <TextField
              value={username}
              onChange={handleChange}
              className="w-[calc(50%-0.5rem)]"
              label="Логин"
              name="username"
              placeholder="Введите логин"
            />
            <TextField
              value={email}
              onChange={handleChange}
              className="w-[calc(50%-0.5rem)]"
              label="Email"
              name="email"
              placeholder="Введите email"
            />
            <TextField
              value={password}
              onChange={handleChange}
              className="w-full"
              label="Пароль"
              name="password"
              placeholder="Введите пароль"
              type="password"
            />
            <TextField
              value={repeatPassword}
              onChange={handleChange}
              className="w-full"
              label="Повторите пароль"
              name="repeatPassword"
              placeholder="Введите пароль"
              type="password"
            />
          </div>
          <Button className="w-full">Зарегистрироваться</Button>

          <div className="w-full text-center">
            Зарегистрированы?&nbsp;
            <Link className="inline-block" to={projectRoutes.signIn}>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
