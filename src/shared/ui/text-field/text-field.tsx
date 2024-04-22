import { ChangeEvent, useState } from 'react'
import clsx from 'clsx'
import { Icon } from 'shared/ui/icon'

import './text-field.scss'

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

  hasError?: boolean
  errorText?: string

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void
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
  hasError = false,
  errorText = 'Заполните поле!',
}: ITextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  if (!id) {
    id = Math.random().toString()
  }

  if (type === 'password') {
    icon = showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'
    type = showPassword ? 'text' : 'password'
  }

  const handleShow = () => setShowPassword(!showPassword)

  return (
    <div className={clsx('text-field', className, hasError && 'text-field_error')}>
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
          className={clsx('text-field__input', hasError && 'text-field__input_error')}
          autoComplete="true"
          placeholder={placeholder}
          name={name}
          maxLength={maxLength}
        />

        {icon && (
          <div className="text-field__icon">
            <Icon icon={icon} onClick={handleShow} />
          </div>
        )}
      </div>
      {hasError && <div className="text-field_error-text">{errorText}</div>}
    </div>
  )
}
