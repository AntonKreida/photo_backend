import { DesignSystemProvider } from '@strapi/design-system';
import { SWRConfig } from 'swr';
import { Routers } from './routers';
import { useTheme } from 'styled-components';

export const App = () => {
  const theme = useTheme();

  return (
    <SWRConfig>
      <DesignSystemProvider theme={theme}>
        <Routers />
      </DesignSystemProvider>
    </SWRConfig>
  );
};
