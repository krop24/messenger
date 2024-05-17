import { ESnackbarType } from './snackbar-enums.ts'
import { ISnackbarState } from './snackbar-types.ts'

export const snackbarInitialState: ISnackbarState = {
  open: false,
  message: '',
  type: ESnackbarType.info,
  loading: false,
}
