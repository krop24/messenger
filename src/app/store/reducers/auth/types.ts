export interface IUser {
  username: string
  email: string
  photo: Nullable<string>
  firstName: string
  lastName: string
}

export interface IAuthState {
  user: IUser
  registration: IUser
  loading: boolean
  login: {
    username: string
    password: string
  }
}
