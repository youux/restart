import { useRoutes } from 'react-router-dom'

import NotFound from './views/NotFound'
import Home from './views/Home'

const Routes = () => {
  const routes = [
    {
      path: '/*',
      element: <Home />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
  return useRoutes(routes)
}

export default Routes
