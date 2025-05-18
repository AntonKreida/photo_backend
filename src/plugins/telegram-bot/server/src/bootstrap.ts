import type { Core } from '@strapi/strapi';
import telegramServices from './services';

const bootstrap = ({ strapi }: { strapi: Core.Strapi }) => {
  telegramServices.botService({ strapi });
};

export default bootstrap;
