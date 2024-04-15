import { IAuthState, IRegistration } from './types'

const registrationFields: IRegistration = {
  username: '',
  email: '',
  photo: null,
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
}

export const authInitialState: IAuthState = {
  registration: registrationFields,
  loading: false,
  login: {
    username: '',
    password: '',
  },
}
