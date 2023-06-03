import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import CharaterDetail from './pages/CharaterDetail';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/character/"id', element: <CharaterDetail /> },
    ],
  },
]);

export default router;
