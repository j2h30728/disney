import { useLocation, useParams } from 'react-router-dom';

import { useQueryCharacterDetail } from '../../../queries/character';
import { Character } from '../../../types/character';

const CharacterDetailData = () => {
  const { state } = useLocation() as { state: Character };
  const { id } = useParams() as { id: string };
  const { data } = useQueryCharacterDetail<string>(id);

  return (
    <>
      <h2>{state.name || data?.name}</h2>
      <img src={state.imageUrl || data?.imageUrl} />
      <ul>
        {data?.films.map((film, idx) => (
          <li key={`films${film}${idx}`}>{film}</li>
        ))}
      </ul>
      <a href={`${data?.sourceUrl}`} target="_blank">
        SOURCE URL
      </a>
    </>
  );
};

export default CharacterDetailData;
