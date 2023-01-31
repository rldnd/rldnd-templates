import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

const formatDate = (date?: string | Date, format?: string): string => {
  if (!date) {
    return '';
  }

  return dayjs(date).format(format ?? 'YYYY.MM.DD HH:mm');
};

export { dayjs, formatDate };
