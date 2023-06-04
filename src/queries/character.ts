import { useQuery } from '@tanstack/react-query';

import { fetchCharacterDetailData, fetchCharacterList } from '../api/character';
import { Character, CharacterList } from '../types/character';

export const useQueryCharacterList = () =>
  useQuery<CharacterList>(['characterList'], fetchCharacterList, { suspense: true });

export const useQueryCharacterDetail = <T>(id: T) =>
  useQuery<Character>(['character', id], () => fetchCharacterDetailData<T>(id), { suspense: true });
