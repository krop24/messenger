export interface IGetUserProps {
  username: string
}

export interface IUser {
  firstName: string
  lastName: string
  photo: string
  email: string
}

export interface IUserSliceState {
  user: {
    current: IUser
    chatUser: IUser
  }
  users: IUser[]
}
