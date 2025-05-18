import 'styled-components';
import type { StrapiTheme } from '../node_modules/@strapi/design-system/dist/themes/index';

declare module 'styled-components' {
  export interface DefaultTheme extends StrapiTheme {}
}
