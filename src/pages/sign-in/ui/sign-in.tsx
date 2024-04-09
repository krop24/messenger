import './sign-in.scss'
import { TextField } from 'shared/ui/text-field'
import { Button } from 'shared/ui/button'

export const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="h-full w-1/2">
        <form className="sign-in__form">
          <TextField label="Username" placeholder="Enter username" />
          <TextField label="Password" placeholder="Enter password" type="password" />
          <Button>Войти</Button>
        </form>
      </div>

      <div className="h-full w-1/2">
        <img />
      </div>
    </div>
  )
}
