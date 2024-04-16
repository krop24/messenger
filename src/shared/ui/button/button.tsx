import React, { FormEvent } from 'react'
import clsx from 'clsx'
import './button.scss'
import { EButtonType } from './enums'

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: (e: FormEvent<HTMLButtonElement>) => void
  variant?: EButtonType
}

export const Button = ({
  children,
  className,
  onClick,
  variant = EButtonType.contained,
}: IButtonProps) => {
  return (
    <button
      type="button"
      className={clsx('btn', className, `btn_${variant}`)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
