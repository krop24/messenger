import { Link, useLocation } from 'react-router-dom'
import { dashboardRoutes, projectRoutes } from 'app/router'
import clsx from 'clsx'
import { userSelector } from 'entities/auth'
import { useAppSelector } from 'shared/lib/store'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'
import { EButtonType } from 'shared/ui/button/enums'
import { Icon } from 'shared/ui/icon'
import { Logo } from 'shared/ui/logo'

import './dashboard.scss'

export const Dashboard = () => {
  const location = useLocation()

  const { firstName, lastName, photo } = useAppSelector(userSelector)

  const isActiveRoute = (to: string) => location.pathname.includes(to)

  return (
    <div className="dashboard">
      <Link className="dashboard__logo" to={projectRoutes.chat}>
        <Logo />
      </Link>

      <Link to={projectRoutes.profile} className="dashboard__profile">
        <Avatar src={photo} name={clsx(firstName, lastName)} />
      </Link>

      {dashboardRoutes.map(route => (
        <Link
          key={route.to}
          to={route.to}
          className={clsx(
            'dashboard__item',
            isActiveRoute(route.to) && 'dashboard__item_active',
          )}
        >
          <Icon icon={route.icon} />
        </Link>
      ))}

      <Link to={projectRoutes.settings} className="dashboard__item mt-auto">
        <Icon icon="cog" />
      </Link>

      <Button className="dashboard__item mt-5" variant={EButtonType.default}>
        <Icon icon="sign-out-alt" />
      </Button>
    </div>
  )
}
