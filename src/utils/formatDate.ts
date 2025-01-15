import { formatDistanceToNow, format } from 'date-fns';

export const formatWithShortUnits = (isoDate: string) => {
  const date = new Date(isoDate);

  try {
    const distance = formatDistanceToNow(date, { addSuffix: true });

    const formatted = distance
      .replace('minute', 'min')
      .replace('minutes', 'mins')
      .replace('about', '')
      .replace('less than', '')
      .trim();

    if (formatted.includes('day') && formatted.includes('ago')) {
      if (formatted.includes('1 day ago')) {
        return 'Yesterday';
      }
    } else if (
      (formatted.includes('hour') || formatted.includes('hours')) &&
      (formatted.includes('ago') || formatted.includes('in'))
    ) {
      const timeFormat = format(date, 'hh:mm a');
      return `${timeFormat}`;
    } else if (
      (formatted.includes('min') || formatted.includes('mins')) &&
      formatted.includes('ago')
    ) {
      const timeFormat = format(date, 'hh:mm a');
      return `${timeFormat}`;
    }

    if (
      formatted.includes('days ago') ||
      formatted.includes('year ago') ||
      formatted.includes('years ago')
    ) {
      return format(date, 'M/d/yyyy');
    }

    return formatted;
  } catch (error) {
    console.log(error);
    return isoDate;
  }
};
