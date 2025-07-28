module.exports = {
  graphql: {
    config: {
      landingPage: true, // If you also want the Sandbox in production
      apolloServer: {
        introspection: true, // Enable introspection queries
        allowBatchedHttpRequests: true,
      },
    },
  },
  "strapi-csv-import-export": {
    config: {
      authorizedExports: ["api::machine.machine",
        "api::projects-information.projects-information",
        "api::contracts-on-chain.contracts-on-chain",
        "api::grow.grow",
        "api::lock-token-whitelist.lock-token-whitelist",
        "api::page-info.page-info"],
      authorizedImports: ["api::machine.machine",
        "api::projects-information.projects-information",
        "api::contracts-on-chain.contracts-on-chain",
        "api::grow.grow",
        "api::lock-token-whitelist.lock-token-whitelist",
        "api::page-info.page-info"],
    }
  },
};
