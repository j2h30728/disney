import { Link } from 'react-router-dom';

import { useQueryCharacterList } from '../../../queries/character';

const CharacterList = () => {
  const { data } = useQueryCharacterList();

  return (
    <>
      {data?.slice(0, 100).map(character => (
        <li key={character.id}>
          <Link to={`character/${character.id}`} state={character}>
            {character.name}
          </Link>
          <img src={character?.imageUrl} />
        </li>
      ))}
    </>
  );
};

export default CharacterList;
