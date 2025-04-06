import { Core } from '@strapi/strapi';
import TelegramBot from 'node-telegram-bot-api';

class BotService extends TelegramBot {
  constructor(
    private strapi: Core.Strapi,
    token: string
  ) {
    super(token, {
      polling: true,
    });

    this.connectListener();
  }

  private connectListener() {
    this.onText(/\/start/, (msg) => {
      this.sendMessage(msg.chat.id, 'Welcome to Strapi 🚀');
    });
  }
}

export default ({ strapi }: { strapi: Core.Strapi }): BotService => {
  const token = strapi.plugin('telegram-bot').config('telegramToken') as string;

  return new BotService(strapi, token);
};
