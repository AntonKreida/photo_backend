import { Core } from '@strapi/strapi';
import TelegramBot from 'node-telegram-bot-api';

class BotService extends TelegramBot {
  #strapi: Core.Strapi;

  constructor(strapi: Core.Strapi, token: string) {
    super(token, {
      polling: {
        autoStart: true,
        interval: 300,
      },
    });

    this.#strapi = strapi;
    this.#connectListener();
  }

  #connectListener() {
    this.onText(/^\/start\s?$/, (msg) => {
      this.sendMessage(
        msg.chat.id,
        `Добро пожаловать! Вас приветствует бот сайта melnikova-foto72.ru. Для того чтобы авторизоваться в нашем боте используйте пожалуйста ссылку в админ. панели сайта`
      );
    });

    this.onText(/^\/start\s[a-zA-Z0-9\-_@.]+$/, (msg) => {
      const userId = msg.text.replace(/^\/start\s/, '');

      console.log(userId);
    });

    this.on('polling_error', (error: any) => {
      console.log(error.message);
    });
  }
}

export default ({ strapi }: { strapi: Core.Strapi }): BotService => {
  const token = strapi.plugin('telegram-bot').config('telegramToken') as string;

  return new BotService(strapi, token);
};
