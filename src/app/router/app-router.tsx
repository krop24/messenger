import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from 'app/router/const'
import { useAppSelector } from 'shared/lib/store'
import { authSelector } from 'app/store/reducers/auth'
import { Loader } from 'shared/ui/loader'
import { createPortal } from 'react-dom'

export const AppRouter = () => {
  const router = createBrowserRouter(routes, {})
  const { loading } = useAppSelector(authSelector)

  return (
    <div className="app">
      {createPortal(<Loader loading={loading} />, document.body)}
      <RouterProvider router={router} />
    </div>
  )
}
