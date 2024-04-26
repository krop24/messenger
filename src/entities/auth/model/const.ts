import { IAuthState, IRegistration, IUser } from './types'

const registrationFields: IRegistration = {
  username: '',
  email: '',
  photo: null,
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  error: {
    username: false,
    email: false,
    firstName: false,
    lastName: false,
    password: false,
    repeatPassword: false,
  },
}

const user: IUser = {
  username: '',
  email: '',
  photo: null,
  firstName: '',
  lastName: '',
}

const loginFields = {
  username: '',
  password: '',
  error: {
    username: false,
    password: false,
  },
}

export const authInitialState: IAuthState = {
  user,
  registration: registrationFields,
  loading: false,
  login: loginFields,
  token: null,
}

export const authActions = {
  login: 'auth/login',
  register: 'auth/register',
  check: 'auth/check',
}
