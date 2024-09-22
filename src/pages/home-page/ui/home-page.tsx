import { Outlet } from 'react-router-dom'
import { Dashboard } from 'widgets/dashboard'

import './home-page.scss'

export const HomePage = () => {
  return (
    <div className="container">
      <div className="flex">
        <Dashboard />
        <div className="home__content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
