import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import CharacterDetail from '../pages/characterDetail';
import Home from '../pages/home';
import ROUTE_PATH from './routerPath';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <App />,
    children: [
      { path: ROUTE_PATH.HOME, element: <Home /> },
      { path: ROUTE_PATH.DETAIL, element: <CharacterDetail /> },
    ],
  },
]);

export default router;
