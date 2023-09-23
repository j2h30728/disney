import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Image } from '@/components';

const CharacterItem = ({ id, imageUrl, name }: { id: string; imageUrl: string; name: string }) => {
  return (
    <CharacterItemWrapper key={id} to={`character/${id}`}>
      <Image alt={name} imageUrl={imageUrl} />
      <CharacterName>{name}</CharacterName>
    </CharacterItemWrapper>
  );
};
const CharacterItemWrapper = styled(Link)`
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

export default CharacterItem;
