import { ComponentProps, FC, ReactNode } from 'react';
import { Box } from '@strapi/design-system';

import { LayoutWrapper } from './layout.styled';

interface ILayoutProps extends ComponentProps<typeof Box> {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children, ...props }) => (
  <LayoutWrapper {...props}>{children}</LayoutWrapper>
);
