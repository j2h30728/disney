import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';

function App() {
  const { pathname } = useLocation();
  const isRootPath = pathname === '/';

  return (
    <Connainer>
      <Header isRootPath={isRootPath} />
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
