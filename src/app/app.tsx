import './styles/index.scss'
import { AppRouter } from 'app/router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import { SnackbarProvider } from 'entities/snackbar'

export const App = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <AppRouter />
      </SnackbarProvider>
    </Provider>
  )
}

library.add(fab, fas, far)
