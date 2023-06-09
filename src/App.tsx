import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';

function App() {
  const { pathname } = useLocation();
  const isRootePath = pathname === '/';

  return (
    <Connainer>
      <Header isRootePath={isRootePath} />
      <Outlet />
    </Connainer>
  );
}

export default App;

const Connainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
