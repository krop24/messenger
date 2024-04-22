import clsx from 'clsx'

import { Icon } from './icon'

import './icon.scss'

interface IPropsIconButton {
  icon: string
  className?: string
  onClick?: () => void
}

export const IconButton = ({ icon, className, onClick }: IPropsIconButton) => {
  return (
    <div className={clsx('icon-button', className)} onClick={onClick} aria-hidden="true">
      <Icon icon={icon} />
    </div>
  )
}
