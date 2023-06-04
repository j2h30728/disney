import { Suspense } from 'react';

import Spinner from '../../components/Spinner';
import CharacterDetailData from './components/CharacterDetailData';

const CharacterDetail = () => {
  return (
    <>
      <Suspense fallback={<Spinner size={40} color="white" />}>
        <CharacterDetailData />
      </Suspense>
    </>
  );
};

export default CharacterDetail;
