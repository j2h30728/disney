import { BASE_URL } from './ApiUrl';

export const fetchCharacterList = async () => await (await fetch(BASE_URL)).json();
export const fetchCharaterDetailData = async <T>(id: T) => await (await fetch(`${BASE_URL}/${id}`)).json();
