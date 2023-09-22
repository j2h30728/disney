import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { FallbackErrorBoundary, Spinner } from '../../components';
import CharacterList from './components/CharacterList';

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
      <Suspense fallback={<Spinner size={40} color="white" />}>
        <CharacterList />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Home;
