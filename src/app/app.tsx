import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from 'app/router'
import { store } from 'app/store'

import { AuthProvider } from './providers/auth-provider'
import { SnackbarProvider } from './providers/snackbar-provider'

import './styles/index.scss'

export const App = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider />
      <BrowserRouter>
        <AuthProvider />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}
