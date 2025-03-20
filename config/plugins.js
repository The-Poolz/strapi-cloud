module.exports = {
  graphql: {
    config: {
      landingPage: true, // If you also want the Sandbox in production
      apolloServer: {
        introspection: true, // Enable introspection queries
      },
    },
  },
};
