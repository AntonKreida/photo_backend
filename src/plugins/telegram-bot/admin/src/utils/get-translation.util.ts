import { PLUGIN_ID } from './plugin-id.util';

const getTranslation = (id: string) => `${PLUGIN_ID}.${id}`;

export { getTranslation };
