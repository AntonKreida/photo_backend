import { DesignSystemProvider } from '@strapi/design-system';
import { Routers } from './routers';

export const App = () => (
  <DesignSystemProvider>
    <Routers />
  </DesignSystemProvider>
);
