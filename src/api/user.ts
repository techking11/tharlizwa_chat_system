import axios from 'axios';
import { baseUrl } from '../global/baseUrl';

export const getUserByEmail = async (email: string) => {
  const { data } = await axios.post(
    `${baseUrl}/users/email`,
    { email },
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  return data;
};
