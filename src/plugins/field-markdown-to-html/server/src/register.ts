import type { Core } from '@strapi/strapi';

import { PLUGIN_ID } from '../../admin/src/pluginId';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: 'field-markdown-to-html',
    type: 'string',
    plugin: PLUGIN_ID,
  });
};

export default register;
