import './sign-in.scss'
import { TextField } from 'shared/ui/text-field'
import { Button } from 'shared/ui/button'
import { Logo } from 'shared/ui/logo'

export const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="h-full w-1/2 p-6 flex">
        <form className="sign-in__form">
          <Logo className="flex mx-auto text-primary-400 w-32" />
          <h1 className="text-center mb-4">Войти в Whisper</h1>
          <TextField label="Username" placeholder="Enter username" />
          <TextField label="Password" placeholder="Enter password" type="password" />
          <Button>Войти</Button>
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
