export interface IRegistration {
  username: string
  email: string
  photo: Nullable<string>
  firstName: string
  lastName: string
  password: string
  repeatPassword: string
}

export interface IUser {
  username: string
  email: string
  photo: Nullable<string>
  firstName: string
  lastName: string
}

export interface IAuthState {
  user: IUser
  registration: IRegistration
  loading: boolean
  login: {
    username: string
    password: string
  }
}
