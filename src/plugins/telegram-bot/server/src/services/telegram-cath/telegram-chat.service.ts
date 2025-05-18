import { Core } from '@strapi/strapi';
import { ITelegramChat } from '../../../../shared';
import { TelegramChatRepository } from '../../repositories';

class TelegramChatService {
  #strapi: Core.Strapi;
  #telegramChatRepository: TelegramChatRepository;

  constructor(strapi: Core.Strapi, telegramChatRepository: TelegramChatRepository) {
    this.#strapi = strapi;
    this.#telegramChatRepository = telegramChatRepository;
  }

  async findAllTelegramChats(): Promise<ITelegramChat[]> {
    return this.#telegramChatRepository.findAllTelegramChats();
  }
}

export default ({ strapi }: { strapi: Core.Strapi }): TelegramChatService => {
  return new TelegramChatService(strapi, new TelegramChatRepository(strapi));
};
