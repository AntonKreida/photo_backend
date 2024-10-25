export default () => ({
    graphql: {
        config: {
          endpoint: '/api/endpoint',
          shadowCRUD: true,
          playgroundAlways: false,
          depthLimit: 7,
          amountLimit: 100,
          apolloServer: {
            tracing: false,
          },
        },
    },
});
