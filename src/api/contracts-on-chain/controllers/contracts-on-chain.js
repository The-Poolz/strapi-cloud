'use strict';

/**
 * contracts-on-chain controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contracts-on-chain.contracts-on-chain');
