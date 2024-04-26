import { ChatPage } from 'pages/chat-page'
import { HomePage } from 'pages/home-page'
import { ProfilePage } from 'pages/profile-page'
import { RegistrationPage } from 'pages/registration-page'
import { SettingsPage } from 'pages/settings-page'
import { SignIn } from 'pages/sign-in'

export const projectRoutes = {
  home: '/',
  chat: '/chat',
  settings: '/settings',
  profile: '/profile',
  signIn: '/sign-in',
  registration: '/sign-up',
}

export const routes = [
  {
    path: projectRoutes.signIn,
    Component: SignIn,
  },
  {
    path: projectRoutes.registration,
    Component: RegistrationPage,
  },
  {
    path: projectRoutes.home,
    Component: HomePage,
    children: [
      {
        path: projectRoutes.chat,
        Component: ChatPage,
      },
      {
        path: `${projectRoutes.chat}/:id`,
        Component: ChatPage,
      },
      {
        path: projectRoutes.settings,
        Component: SettingsPage,
      },
      {
        path: projectRoutes.profile,
        Component: ProfilePage,
      },
    ],
  },
]

export const dashboardRoutes = [
  {
    to: projectRoutes.chat,
    icon: 'fa-regular fa-comment-dots',
  },
]
