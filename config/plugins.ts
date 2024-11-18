export default () => ({
    graphql: {
        config: {
          enabled: true,
          endpoint: '/api/endpoint',
          playgroundAlways: false,
          defaultLimit: 100,
          apolloServer: {
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
