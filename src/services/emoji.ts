import axios from 'axios';

export interface EmojiResult {
  code: string;
  character: string;
  image: string;
  name: string;
  group: string;
  subgroup: string;
}

// const emojiGroups: string[] = [
//   'smileys_emotion',
//   'people_body',
//   'component',
//   'animals_nature',
//   'food_drink',
//   'travel_places',
//   'activities',
//   'objects',
//   'symbols',
//   'flags',
// ];

export async function EmojiSingle(param: string): Promise<EmojiResult[]> {
  try {
    const response: EmojiResult[] = await axios
      .get(`https://api.api-ninjas.com/v1/emoji?group=${param}&offset=100`, {
        headers: {
          'x-api-key': import.meta.env.VITE_EMOJI_X_API_KEY,
        },
      })
      .then((data) => data.data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function EmojiGroups() {}
