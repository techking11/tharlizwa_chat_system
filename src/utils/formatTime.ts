import { format } from 'date-fns';

export const formatTime = (isoDate: string) => {
  const date = new Date(isoDate);

  try {
    const timeFormat = format(date, 'hh:mm a');
    return `${timeFormat}`;
  } catch (error) {
    console.log(error);
    return isoDate;
  }
};
