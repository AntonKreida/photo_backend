import { Typography } from '@strapi/design-system';
import { ArrowLeft } from '@strapi/icons';
import { HeaderWrapper, LinkBack } from './header.styled';
import { FC } from 'react';

interface IHeaderProps {
  linkHrefBack: string;
  title: string;
}

export const Header: FC<IHeaderProps> = ({ linkHrefBack, title }) => (
  <HeaderWrapper>
    {!!linkHrefBack && (
      <LinkBack to="/" startIcon={<ArrowLeft />}>
        Назад
      </LinkBack>
    )}
    <Typography variant="alpha" fontWeight="bold">
      {title}
    </Typography>
  </HeaderWrapper>
);
