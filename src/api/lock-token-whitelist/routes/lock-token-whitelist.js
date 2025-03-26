'use strict';

/**
 * lock-token-whitelist router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lock-token-whitelist.lock-token-whitelist');
