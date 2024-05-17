import { ESnackbarType } from './enums.ts'
import { ISnackbarState } from './types.ts'

export const snackbarInitialState: ISnackbarState = {
  open: false,
  message: '',
  type: ESnackbarType.info,
  loading: false,
}
