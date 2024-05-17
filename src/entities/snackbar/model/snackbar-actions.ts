import { closeSnackbar, showSnackbar } from 'entities/snackbar'
import { AppThunk } from 'shared/types'

import { ISnackbarShow } from './types'

export const showSnackbarWithTimeout =
  (payload: ISnackbarShow, timeout = 3000): AppThunk =>
  dispatch => {
    dispatch(showSnackbar(payload))

    setTimeout(() => {
      dispatch(closeSnackbar())
    }, timeout)
  }
