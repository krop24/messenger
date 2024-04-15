import './sign-in.scss'
import { TextField } from 'shared/ui/text-field'
import { Button } from 'shared/ui/button'
import { Logo } from 'shared/ui/logo'
import { handleUpdateValue, loginSelector, signIn } from 'entities/auth'
import { useDispatch } from 'react-redux'
import { ChangeEvent } from 'react'
import { useAppSelector } from 'shared/lib/store'
import { Link } from 'react-router-dom'
import { projectRoutes } from 'app/router'

export const SignIn = () => {
  const dispatch = useDispatch()
  const { username, password } = useAppSelector(loginSelector)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      handleUpdateValue({ value: e.target.value, name: e.target.name, type: 'login' })
    )

  const handleSignIn = () => dispatch(signIn())

  return (
    <div className="sign-in">
      <div className="h-full w-1/2 p-6 flex">
        <form className="sign-in__form">
          <Logo className="flex mx-auto text-primary-400 w-32" />
          <h1 className="text-center mb-4">Войти в Whisper</h1>
          <TextField
            onChange={handleChange}
            label="Username"
            value={username}
            name="username"
            placeholder="Enter username"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={password}
            label="Password"
            placeholder="Enter password"
            type="password"
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

      <div className="h-full w-1/2">
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
