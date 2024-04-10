import './styles/index.scss'
import { AppRouter } from 'app/router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

library.add(fab, fas, far)
