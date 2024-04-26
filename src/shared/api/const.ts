export const apiUrls = {
  base: 'http://localhost:6060/api',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    check: '/auth/check',
  },
  chat: {
    chats: '/chats',
    chat: '/chat',
  },
  user: '/user',
}

export const apiConfig = {
  baseURL: apiUrls.base,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}
