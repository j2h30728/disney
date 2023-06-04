import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isRootePath }: { isRootePath: boolean }) => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <>
      {!isRootePath && <button onClick={handleGoBack}>&lt;</button>}
      <Link to="/">DISNEY</Link>
    </>
  );
};
export default Header;
