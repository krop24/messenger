import React from 'react'
import { createPortal } from 'react-dom'
import { snackbarSelector } from 'entities/snackbar'
import { useAppSelector } from 'shared/lib/store'
import { Loader } from 'shared/ui/loader'

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
