export const projectRoutes = {
  home: '/',
  chat: '/chat',
  settings: '/settings',
  profile: '/profile',
  signIn: '/sign-in',
  registration: '/sign-up',
}

export const dashboardRoutes = [
  {
    to: projectRoutes.chat,
    icon: 'fa-regular fa-comment-dots',
  },
]
