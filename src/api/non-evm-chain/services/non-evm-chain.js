'use strict';

/**
 * non-evm-chain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::non-evm-chain.non-evm-chain');
