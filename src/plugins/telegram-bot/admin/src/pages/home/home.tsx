import { useTelegramChats } from '../../entities';
import { Header, Layout, TableComponent } from '../../shared';

export const HomePage = () => {
  const { telegramChats = [] } = useTelegramChats();

  return (
    <Layout>
      <Header linkHrefBack="/" title="Панель управления плагином Telegram Bot" />

      <TableComponent
        data={telegramChats}
        columns={[
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'chatId',
            label: 'Chat ID',
          },
          {
            key: 'username',
            label: 'Username',
          },
          {
            key: 'isActiveChat',
            label: 'Активный чат',
            render: (value) => (value ? 'Да' : 'Нет'),
          },
        ]}
      />
    </Layout>
  );
};
