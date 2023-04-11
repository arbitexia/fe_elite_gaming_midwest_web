import { UserStatus, RequestStatus, RewardStatus } from '@/constants';
import config from '@/config';

export const getColor = (value: string) => {
  if (
    value === UserStatus.ACTIVATED ||
    value === RequestStatus.ACCEPTED ||
    value === RewardStatus.AVAILABLE
  )
    return 'success';
  else if (
    value === UserStatus.DISABLED ||
    value === RequestStatus.DECLINED ||
    value === RewardStatus.OUT
  )
    return 'error';
  else if (value === UserStatus.ARCHIVED || value === RequestStatus.WAITING)
    return 'info';
  else return 'default';
};

export const getHeader = () => {
  return {
    headers: {
      'Access-Control-Allow-Origin': config.API_URL || '',
      'Access-Control-Allow-Methods': 'GET,POST',
    },
  };
};

export const getAuthorizeHeader = () => {
  return {
    'Access-Control-Allow-Origin': config.API_URL || '',
    'Access-Control-Allow-Methods': 'GET,POST',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
};

export const formatPhoneNumber = (str: string) => {
  const cleaned = ('' + str).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
};

export const convertMBtoBytes = (mbValue: number) => mbValue * 1048576;
