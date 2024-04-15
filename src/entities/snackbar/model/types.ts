import { ESnackbarType } from './enums'

export interface ISnackbarState {
  open: boolean
  message: string
  type: ESnackbarType
  loading: boolean
}
