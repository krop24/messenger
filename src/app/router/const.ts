import { SignIn } from 'pages/sign-in'
import { Layout } from 'app/layout'
import { RouteObject } from 'react-router-dom'
import { RegistrationPage } from 'pages/registration-page'
import { HomePage } from 'pages/home-page'
import { ChatPage } from 'pages/chat-page'
import { SettingsPage } from 'pages/settings-page'
import { ProfilePage } from 'pages/profile-page'

export const projectRoutes = {
  home: '/',
  chat: '/chat',
  settings: '/settings',
  profile: '/profile',
  signIn: '/sign-in',
  registration: '/registration',
}

export const routes: RouteObject[] = [
  {
    path: projectRoutes.home,
    Component: Layout,
    children: [
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
    ],
  },
]

export const dashboardRoutes = [
  {
    to: projectRoutes.chat,
    icon: 'fa-regular fa-comment-dots',
  },
]
