import axios from 'axios';
import { EmojiGroupTypes } from '../types/emojiGroup/types';

export const emojisGroupList: string[] = [
  'smileys_emotion',
  'people_body',
  'component',
  'animals_nature',
  'food_drink',
  'travel_places',
  'activities',
  'objects',
  'symbols',
  'flags',
];

export async function EmojiSingle(
  group: string,
  offset: number
): Promise<EmojiGroupTypes[]> {
  try {
    const response: EmojiGroupTypes[] = await axios
      .get(
        `https://api.api-ninjas.com/v1/emoji?group=${group}&offset=${offset}`,
        {
          headers: {
            'x-api-key': import.meta.env.VITE_EMOJI_X_API_KEY,
          },
        }
      )
      .then((data) => data.data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
