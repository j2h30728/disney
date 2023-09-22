import { useQuery } from '@tanstack/react-query';

import { Character, CharacterList } from '../types';

export const useQueryCharacterList = () => useQuery<CharacterList>(['characters'], { suspense: true });

export const useQueryCharacterDetail = (id: string) => useQuery<Character>(['characters', id], { suspense: true });
