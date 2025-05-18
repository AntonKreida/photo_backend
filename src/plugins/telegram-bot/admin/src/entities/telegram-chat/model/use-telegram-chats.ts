import useSWR from 'swr';
import { getTelegramChats } from '../api';
import { SWR_KEYS } from '../../../shared';

export const useTelegramChats = () => {
  const { data, isLoading, error } = useSWR(SWR_KEYS.TELEGRAM_CHATS, getTelegramChats);

  return {
    telegramChats: data,
    isLoading,
    isError: error,
  };
};
