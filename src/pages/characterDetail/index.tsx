import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import FallbackErrorBoundary from '../../components/FallbackErrorBoundary';
import Spinner from '../../components/Spinner';
import CharacterDetailData from './components/CharacterDetailData';

const CharacterDetail = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
        <Suspense fallback={<Spinner size={40} color="white" />}>
          <CharacterDetailData />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default CharacterDetail;
