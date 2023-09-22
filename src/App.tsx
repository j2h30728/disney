import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components';

function App() {
  const { pathname } = useLocation();
  const isRootPath = pathname === '/';

  return (
    <Container>
      <Header isRootPath={isRootPath} />
      <Outlet />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
