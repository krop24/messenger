import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main className="min-h-[100vh] w-full flex">
      <Outlet />
    </main>
  )
}
