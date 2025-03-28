'use strict';

/**
 * contracts-on-chain router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contracts-on-chain.contracts-on-chain');
