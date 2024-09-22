import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from 'entities/auth'
import { chatSlice } from 'entities/chat'
import { snackbarSlice } from 'entities/snackbar'
import { userSlice } from 'entities/user'

import { websocketMiddleware } from './middleware'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    snackbar: snackbarSlice.reducer,
    user: userSlice.reducer,
    chat: chatSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(websocketMiddleware),
})
