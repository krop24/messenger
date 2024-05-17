import { ESnackbarType } from './enums.ts'

export interface ISnackbarState {
  open: boolean
  message: string
  type: ESnackbarType
  loading: boolean
}
