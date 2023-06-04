import { Outlet, useMatch } from 'react-router-dom';

import Header from './components/Header';

function App() {
  const isRootePath = Boolean(useMatch('/'));

  return (
    <>
      <Header isRootePath={isRootePath} />
      <Outlet />
    </>
  );
}

export default App;
