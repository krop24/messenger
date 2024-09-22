import React, { FormEvent } from 'react'
import clsx from 'clsx'
import { useDebounce } from 'shared/lib/debounce'

import { EButtonType } from './enums'

import './button.scss'

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: (e: FormEvent<HTMLButtonElement>) => void
  variant?: EButtonType
  debounce?: number
}

export const Button = ({
  children,
  className,
  onClick = () => {},
  variant = EButtonType.contained,
  debounce = 0,
}: IButtonProps) => {
  const [debouncedFunction] = useDebounce(onClick, debounce)

  return (
    <button
      type="button"
      className={clsx('btn', className, `btn_${variant}`)}
      onClick={debouncedFunction}
    >
      {children}
    </button>
  )
}
