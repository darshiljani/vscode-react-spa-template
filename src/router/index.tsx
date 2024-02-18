import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <Outlet />
      </>
    ),
  },
]

export const router = createBrowserRouter(routes)
