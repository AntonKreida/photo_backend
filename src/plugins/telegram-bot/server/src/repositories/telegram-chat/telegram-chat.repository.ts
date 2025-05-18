import { Core } from '@strapi/strapi';
import { ITelegramChat } from '../../../../shared';

export class TelegramChatRepository {
  #strapi: Core.Strapi;

  constructor(strapi: Core.Strapi) {
    this.#strapi = strapi;
  }

  async findAllTelegramChats(): Promise<ITelegramChat[]> {
    return (await this.#strapi.entityService.findMany(
      'plugin::telegram-bot.telegram-chat'
    )) as ITelegramChat[];
  }
}
