import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';

export default {
  register(app: any) {
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });

    app.customFields.register({
      name: 'field-markdown-to-html',
      pluginId: PLUGIN_ID,
      type: 'string',
      intlLabel: {
        id: `${PLUGIN_ID}.label`,
        defaultMessage: 'Markdown to HTML',
      },
      intlDescription: {
        id: `${PLUGIN_ID}.description`,
        defaultMessage: 'Set Markdown to HTML',
      },
      components: {
        Input: async () =>
          import('./shared/input').then((module) => ({
            default: module.Input,
          })),
      },
      options: {
        advanced: [
          {
            intlLabel: {
              id: `${PLUGIN_ID}.options.min`,
              defaultMessage: 'Minimal value',
            },
            name: 'min',
            type: 'number',
          },
          {
            intlLabel: {
              id: `${PLUGIN_ID}.options.max`,
              defaultMessage: 'Maximum value',
            },
            name: 'max',
            type: 'number',
          },
        ],
      },
    });
  },

  bootstrap(_app: any) {},
  async registerTrads(app: any) {
    const { locales } = app;

    const importedTranslations = await Promise.all(
      (locales as string[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: getTranslation(data),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return importedTranslations;
  },
};
