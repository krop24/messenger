export interface IRegistration {
  username: string
  email: string
  photo: Nullable<string>
  firstName: string
  lastName: string
  password: string
  repeatPassword: string
}

export interface IAuthState {
  registration: IRegistration
  loading: boolean
  login: {
    username: string
    password: string
  }
}
