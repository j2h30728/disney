export interface Character {
  id: string;
  films: Array<string>;
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

export type CharacterList = Array<Pick<Character, 'id' | 'name' | 'imageUrl'>>;
