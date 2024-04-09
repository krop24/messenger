import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from 'app/router/const'

export const AppRouter = () => {
  const router = createBrowserRouter(routes, {})

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}
