'use strict';

/**
 * non-evm-chain router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::non-evm-chain.non-evm-chain');
