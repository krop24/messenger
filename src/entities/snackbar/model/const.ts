import { ESnackbarType } from './enums'
import { ISnackbarState } from './types'

export const snackbarInitialState: ISnackbarState = {
  open: false,
  message: '',
  type: ESnackbarType.info,
  loading: false,
}
