import { Route, Routes } from 'react-router-dom'
import { projectRoutes } from 'app/router/const'
import { ChatPage } from 'pages/chat-page'
import { HomePage } from 'pages/home-page'
import { ProfilePage } from 'pages/profile-page'
import { RegistrationPage } from 'pages/registration-page'
import { SettingsPage } from 'pages/settings-page'
import { SignIn } from 'pages/sign-in'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={projectRoutes.signIn} element={<SignIn />} />
      <Route path={projectRoutes.registration} element={<RegistrationPage />} />
      <Route path={projectRoutes.home} element={<HomePage />}>
        <Route path={projectRoutes.chat} element={<ChatPage />}>
          <Route path=":id" element={<ChatPage />} />
        </Route>
        <Route path={projectRoutes.settings} element={<SettingsPage />} />
        <Route path={projectRoutes.profile} element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}
