import { ComponentProps, FC, ReactNode } from 'react';
import { Box } from '@strapi/design-system';

interface ILayoutProps extends ComponentProps<typeof Box> {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => <Box>{children}</Box>;
