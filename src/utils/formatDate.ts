import { formatDistanceToNow } from 'date-fns';

export const formatWithShortUnits = (date: Date) => {
  try {
    const formatted = formatDistanceToNow(date, { addSuffix: true })
      .replace('minute', 'min')
      .replace('minutes', 'mins')
      .replace('about', '')
      .replace('less than', '');

    return formatted;
  } catch (error) {
    console.log(error);
  }
};
