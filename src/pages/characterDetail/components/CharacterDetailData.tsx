import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Image } from '../../../components';
import { useQueryCharacterDetail } from '../../../queries/character';
import { Character } from '../../../types';

const CharacterDetailData = () => {
  const { state } = useLocation() as { state: Character };
  const { id } = useParams() as { id: string };
  const { data } = useQueryCharacterDetail(id);

  return (
    <CharacterDetailContainer>
      <Title>{state?.name || data?.name}</Title>
      <SourceUrl href={`${data?.sourceUrl}`} target="_blank">
        Wiki
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
        </svg>
      </SourceUrl>
      <Image.DetailCharacter imageUrl={state?.imageUrl || data?.imageUrl} />
      <Films>
        <h3>Films</h3>
        {data?.films.map((film, idx) => (
          <Film key={`films${film}${idx}`}>{film}</Film>
        ))}
      </Films>
    </CharacterDetailContainer>
  );
};

export default CharacterDetailData;

const CharacterDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h2`
  font-size: 50px;
  background-color: white;
  padding: 10px 10px 20px;
  width: 100%;
  text-align: center;
`;

const SourceUrl = styled.a`
  color: white;
  text-decoration: none;
  align-self: self-end;
  margin-right: 200px;
  svg {
    fill: rgba(255, 255, 255, 0.5);
    margin-left: 10px;
    width: 13px;
  }
`;

const Films = styled.ul`
  margin: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 10px;
  color: white;
  h3 {
    font-size: 35px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed white;
    width: 100%;
    text-align: center;
  }
`;

const Film = styled.li`
  width: fit-content;
  padding: 4px;
  border-radius: 10px;
  font-size: 20px;
`;
