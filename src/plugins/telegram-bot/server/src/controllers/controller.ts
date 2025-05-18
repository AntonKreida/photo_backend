import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('telegram-bot')
      // the name of the service file & the method.
      .service('service')
      .getWelcomeMessage();
  },

  getTelegramChats(ctx) {
    ctx.body = strapi.plugin('telegram-bot').service('telegramChatService').findAllTelegramChats();
  },
});

export default controller;
