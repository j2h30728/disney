import { Suspense } from 'react';

import Spinner from '../../components/Spinner';
import CharacterList from './components/CharacterList';

const Home = () => {
  return (
    <>
      <Suspense fallback={<Spinner size={40} color="white" />}>
        <CharacterList />
      </Suspense>
    </>
  );
};

export default Home;
