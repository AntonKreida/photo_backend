export default () => ({
    graphql: {
        config: {
          enabled: true,
          endpoint: '/api/endpoint',
          playgroundAlways: false,
          defaultLimit: 100,
          apolloServer: {
            bodyParserConfig: {
              limit: "2mb",
              formLimit: "2mb",
              jsonLimit: "2mb",
              textLimit: "2mb",
              xmlLimit: "2mb",
            },
          },
        },
    },
});
