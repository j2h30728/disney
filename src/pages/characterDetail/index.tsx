import { Suspense } from 'react';

import CharacterDetailData from './components/CharacterDetailData';

const CharacterDetail = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <CharacterDetailData />
    </Suspense>
  );
};

export default CharacterDetail;
