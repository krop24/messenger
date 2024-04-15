import React from 'react'

import { createPortal } from 'react-dom'
import { Loader } from 'shared/ui/loader'
import { useAppSelector } from 'shared/lib/store'
import { snackbarSelector } from './model/selectors'

interface ISnackbarProviderProps {
  children: React.ReactNode
}

export const SnackbarProvider = ({ children }: ISnackbarProviderProps) => {
  const { loading } = useAppSelector(snackbarSelector)

  return (
    <>
      {createPortal(<Loader loading={loading} />, document.body)}
      {children}
    </>
  )
}
