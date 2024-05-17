import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { AppRouter } from 'app/router'
import { store } from 'app/store'

import { AuthProvider } from './providers/auth-provider'
import { SnackbarProvider } from './providers/snackbar-provider'

import './styles/index.scss'

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <SnackbarProvider>
            <AppRouter />
          </SnackbarProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  )
}

library.add(fab, fas, far)
