import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IPropsIcon {
  icon: string
  className?: string
  onClick?: () => void
}

export const Icon = ({ icon, className, onClick }: IPropsIcon) => {
  return (
    <FontAwesomeIcon icon={icon as IconProp} onClick={onClick} className={className} />
  )
}
