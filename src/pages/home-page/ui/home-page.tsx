import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { projectRoutes } from 'app/router/const'
import { useEffect } from 'react'
import { Dashboard } from 'widgets/dashboard'
import './home-page.scss'

export const HomePage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === projectRoutes.home) {
      navigate(projectRoutes.chat)
    }
  })

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
