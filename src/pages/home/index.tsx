import { Suspense } from 'react';

import CharacterList from './components/CharacterList';

const Home = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <CharacterList />
      </Suspense>
    </>
  );
};

export default Home;
