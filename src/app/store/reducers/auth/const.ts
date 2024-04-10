import { IAuthState, IUser } from './types'

const user: IUser = {
  username: '',
  email: '',
  photo: null,
  firstName: '',
  lastName: '',
}

export const authInitialState: IAuthState = {
  user,
  registration: user,
  loading: false,
  login: {
    username: '',
    password: '',
  },
}
