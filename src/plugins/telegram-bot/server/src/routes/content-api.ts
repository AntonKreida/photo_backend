export default [
  {
    method: 'GET',
    path: '/chats',
    handler: 'controller.getTelegramChats',
    config: {
      auth: false,
    },
  },
];
