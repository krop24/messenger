import clsx from 'clsx'
import { snackbarSelector } from 'entities/snackbar'
import { useAppSelector } from 'shared/lib/store'
import { Icon } from 'shared/ui/icon'

import { typeIcons } from '../lib/const'

import './snackbar.scss'

export const Snackbar = () => {
  const { message, open, type } = useAppSelector(snackbarSelector)

  return (
    <div className={clsx('snackbar', open && 'snackbar_active')}>
      <div className={clsx('snackbar__icon', `snackbar__icon_${type}`)}>
        <Icon icon={typeIcons[type as keyof typeof typeIcons]} />
      </div>
      <div className="snackbar__message">{message}</div>
    </div>
  )
}
