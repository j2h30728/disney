import { useParams } from 'react-router-dom';

import { useQueryCharacterDetail } from '../queries/character';

const CharacterDetail = () => {
  const { id } = useParams() as { id: string };
  const { isLoading, data } = useQueryCharacterDetail<string>(id);

  return (
    <>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <p>{data?.name}</p>
          <ul>
            {data?.films.map((film, idx) => (
              <li key={`films${film}${idx}`}>{film}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CharacterDetail;
