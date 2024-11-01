import { PLUGIN_ID } from '../pluginId';

const getTranslation = (data: string) => {
  const result = Object.entries(data).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`${PLUGIN_ID}.${key}`]: value,
    };
  }, {});

  return result;
};

export { getTranslation };
