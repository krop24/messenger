import { FormEvent, useState } from 'react'
import clsx from 'clsx'
import './text-field.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface ITextFieldProps {
  id?: string
  icon?: string
  name?: string
  className?: string

  label?: string
  value?: string
  placeholder?: string
  type?: string
  maxLength?: number | undefined

  onChange?: (e: FormEvent<HTMLInputElement>) => void
  onInput?: (e: FormEvent<HTMLInputElement>) => void
}

export const TextField = ({
  name,
  id,
  icon,
  label,
  className,
  placeholder,
  value,
  type = 'text',
  maxLength,
  onChange = () => {},
  onInput = () => {},
}: ITextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  if (!id) {
    id = Date.now().toString()
  }

  if (type === 'password') {
    icon = showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'
    type = showPassword ? 'text' : 'password'
  }

  const handleShow = () => setShowPassword(!showPassword)

  return (
    <div className={clsx('text-field', className)}>
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
      <div className="text-field__wrapper">
        <input
          id={id}
          value={value}
          onChange={onChange}
          onInput={onInput}
          type={type}
          className="text-field__input"
          placeholder={placeholder}
          name={name}
          maxLength={maxLength}
        />

        {icon && (
          <div className="text-field__icon">
            <FontAwesomeIcon icon={icon as IconProp} onClick={handleShow} />
          </div>
        )}
      </div>
    </div>
  )
}
