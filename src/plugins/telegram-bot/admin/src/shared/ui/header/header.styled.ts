import styled from 'styled-components';
import { Link } from '@strapi/design-system';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinkBack = styled(Link)`
  color: ${({ theme }) => theme.colors.primary700};
`;
