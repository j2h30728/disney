import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({ isRootePath }: { isRootePath: boolean }) => {
  const navigate = useNavigate();
  const handleCLickBackButton = () => navigate(-1);
  return (
    <RootPathwrapeer>
      {isRootePath ? null : <BackButton onClick={handleCLickBackButton}>&lt;</BackButton>}
      <Title to="/">Disney Characters</Title>
    </RootPathwrapeer>
  );
};
export default Header;

const RootPathwrapeer = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
`;

const Title = styled(Link)`
  font-size: 30px;
  padding: 10px 40px 20px;
  color: white;
  text-align: end;
  text-decoration: none;
  font-family: 'Pacifico', cursive;
`;

const BackButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  font-size: 50px;
  cursor: pointer;
  color: white;
  left: 0;
`;
