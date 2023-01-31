import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

const useI18n = (): TFunction => {
  const { t } = useTranslation();
  return t;
};

export default useI18n;
