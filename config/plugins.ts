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
            bodyParserConfig: {
              limit: "15mb",
              formLimit: "15mb",
              jsonLimit: "15mb",
              textLimit: "15mb",
              xmlLimit: "15mb",
            },
          },
        },
    },
});
