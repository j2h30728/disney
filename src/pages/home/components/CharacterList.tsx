import styled from 'styled-components';

import { useQueryCharacterList } from '@/queries/character';

import CharacterItem from './CharacterItem';

const CharacterList = () => {
  const { data } = useQueryCharacterList();

  return (
    <CharacterListContainer>
      {data?.slice(0, 198).map(character => (
        <CharacterItem key={character.id} id={character.id} name={character.name} imageUrl={character.imageUrl} />
      ))}
    </CharacterListContainer>
  );
};

export default CharacterList;

const CharacterListContainer = styled.div`
  display: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
