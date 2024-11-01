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
    "field-markdown-to-html": {
      enabled: true,
      resolve: "./src/plugins/field-markdown-to-html",
    }
});
