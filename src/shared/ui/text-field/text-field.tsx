import { FormEvent } from 'react'
import clsx from 'clsx'
import './text-field.scss'

interface ITextFieldProps {
  id?: string
  name?: string
  className?: string

  label?: string
  value?: string
  placeholder?: string
  type?: string

  onChange?: (e: FormEvent<HTMLInputElement>) => void
  onInput?: (e: FormEvent<HTMLInputElement>) => void
}

export const TextField = ({
  name,
  id,
  label,
  className,
  placeholder,
  value,
  type = 'text',
  onChange = () => {},
  onInput = () => {},
}: ITextFieldProps) => {
  if (!id) {
    id = Date.now().toString()
  }

  return (
    <div className={clsx('text-field', className)}>
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        onInput={onInput}
        type={type}
        className="text-field__input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  )
}
