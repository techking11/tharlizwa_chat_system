import { useQuery } from '@tanstack/react-query';
import { fetchEmojis } from '../services/emoji';

export const useEmojisQuery = (group: string, offset: number) => {
  return useQuery({
    queryKey: ['emojis', group, offset],
    queryFn: () => fetchEmojis(group, offset),
  });
};
