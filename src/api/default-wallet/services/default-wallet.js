'use strict';

/**
 * default-wallet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::default-wallet.default-wallet');
