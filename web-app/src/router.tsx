import { createBrowserRouter } from 'react-router-dom'
import { GlobalLayout } from './components/layouts/globalLayout/GlobalLayout'
import { Home } from './components/pages/home/Home'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <GlobalLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
      ]
    }
  ]
)
