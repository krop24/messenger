import { IUserSliceState } from './types'

export const userSliceInitialState: IUserSliceState = {
  user: {
    current: {
      firstName: '',
      lastName: '',
      photo: '',
      email: '',
    },
    chatUser: {
      firstName: '',
      lastName: '',
      photo: '',
      email: '',
    },
  },
  users: [],
}

export const userActions = {
  getUser: 'user/getUser',
  getUsers: 'user/getUsers',
}
