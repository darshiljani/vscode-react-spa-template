import { router } from '@/router'
import { RouterProvider } from 'react-router-dom'

const AppProvider = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default AppProvider
