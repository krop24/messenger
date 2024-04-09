import { SignIn } from 'pages/sign-in'
import { Layout } from 'app/layout'
import { RouteObject } from 'react-router-dom'

export const projectRoutes = {
  home: '/',
  chat: '/chat',
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
    ],
  },
]
