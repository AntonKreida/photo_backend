import { mergeConfig, type UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default (config: UserConfig) => {
  config.plugins?.push(svgr());

  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
