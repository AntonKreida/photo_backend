import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { getTranslation } from '../shared/utils/get-translation.util';

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <h1>Welcome {formatMessage({ id: getTranslation('plugin.name') })}</h1>
      <a href="tg://resolve?domain=photo_sasha_test_bot&start=user_id" target="_blank">
        линка на телеграм бот
      </a>
    </Main>
  );
};

export { HomePage };
