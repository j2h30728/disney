import { Link } from 'react-router-dom';

import { useQueryCharacterList } from '../queries/character';

const Home = () => {
  const { isLoading, data } = useQueryCharacterList();

  return (
    <>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <ul>
          {data?.map(charater => (
            <li key={charater.id}>
              <Link to={`character/${charater.id}`}>{charater.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
