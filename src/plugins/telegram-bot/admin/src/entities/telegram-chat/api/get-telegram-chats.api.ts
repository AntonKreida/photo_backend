import { getFetchClient } from '@strapi/strapi/admin';
import { ITelegramChat } from '../lib/';

export const getTelegramChats = async () => {
  try {
    const { get } = getFetchClient();

    const { data } = await get<ITelegramChat[]>('/api/telegram-bot/chats');

    return data;
  } catch (error) {
    console.log(error);
  }
};
