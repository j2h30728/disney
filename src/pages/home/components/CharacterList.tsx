import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Image from '../../../components/Image';
import { useQueryCharacterList } from '../../../queries/character';

const CharacterList = () => {
  const { data } = useQueryCharacterList();

  return (
    <CharacterListContainer>
      {data?.slice(0, 198).map(character => (
        <CharacterItem key={character.id} to={`character/${character.id}`} state={character}>
          <Image imageUrl={character?.imageUrl} />
          <CharacterName>{character.name}</CharacterName>
        </CharacterItem>
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

const CharacterItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border-radius: 45px;
  text-decoration: none;
  color: white;
  gap: 20px;
  transition: all 0.5s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
  }
`;
const CharacterName = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  font-family: 'Pacifico', cursive;
`;
