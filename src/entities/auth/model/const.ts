import { IAuthState, IRegistration, IUser } from './types'

const registrationFields: IRegistration = {
  username: '',
  email: '',
  photo: null,
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
}

const user: IUser = {
  username: '',
  email: '',
  photo: null,
  firstName: '',
  lastName: '',
}

export const authInitialState: IAuthState = {
  user,
  registration: registrationFields,
  loading: false,
  login: {
    username: '',
    password: '',
  },
}
