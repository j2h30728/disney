import { useQuery } from '@tanstack/react-query';

import { fetchCharacterList, fetchCharaterDetailData } from '../api/charater';
import { Character, CharacterList } from '../types/character';

export const useQueryCharacterList = () => useQuery<CharacterList>(['charaterList'], fetchCharacterList);
export const useQueryCharacterDetail = <T>(id: T) =>
  useQuery<Character>(['character'], () => fetchCharaterDetailData<T>(id));
