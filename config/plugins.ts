export default () => ({
    graphql: {
        config: {
          enabled: true,
          endpoint: '/api/endpoint',
          playgroundAlways: false,
          defaultLimit: 100,
          apolloServer: {
            bodyParserConfig: {
              limit: "256mb",
              formLimit: "256mb",
              jsonLimit: "256mb",
              textLimit: "256mb",
              xmlLimit: "256mb",
            },
          },
        },
    },
});
