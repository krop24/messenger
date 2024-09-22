import { createPortal } from 'react-dom'
import { Snackbar, snackbarSelector } from 'entities/snackbar'
import { useAppSelector } from 'shared/lib/store'
import { Loader } from 'shared/ui/loader'

export const SnackbarProvider = () => {
  const { loading } = useAppSelector(snackbarSelector)

  return (
    <>
      {createPortal(<Loader loading={loading} />, document.body)}
      {createPortal(<Snackbar />, document.body)}
    </>
  )
}
