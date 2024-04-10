declare module '*.jpg'
declare module '*.png'

declare type RootState = ReturnType<typeof import('./store').store.getState>
declare type AppDispatch = typeof import('./store').store.dispatch

type Maybe<T> = T | undefined
type Nullable<T> = T | null
