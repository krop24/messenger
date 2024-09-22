export interface IRegistration {
  username: string
  email: string
  photo: Nullable<string>
  firstName: string
  lastName: string
  password: string
  repeatPassword: string
  error: {
    username: boolean
    email: boolean
    firstName: boolean
    lastName: boolean
    password: boolean
    repeatPassword: boolean
  }
}

export interface IUser {
  username: string
  email: string
  photo: Nullable<string>
  firstName: string
  lastName: string
}

export interface ILogin {
  username: string
  password: string
  error: {
    username: boolean
    password: boolean
  }
}

export interface IAuthState {
  user: IUser
  isRegistered: boolean
  registration: IRegistration
  loading: boolean
  login: ILogin
  token: Nullable<string>
  isLogoutOpen: boolean
}
