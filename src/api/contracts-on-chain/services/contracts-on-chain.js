'use strict';

/**
 * contracts-on-chain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contracts-on-chain.contracts-on-chain');
