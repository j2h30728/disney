import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import CharacterDetail from './pages/characterDetail';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'character/:id', element: <CharacterDetail /> },
    ],
  },
]);

export default router;
