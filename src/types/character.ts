export interface Character {
  id: number;
  films: Array<string>;
  name: string;
  imageUrl: string;
  souceUrl: string;
}

export type CharacterList = Array<Pick<Character, 'id' | 'name' | 'imageUrl'>>;
