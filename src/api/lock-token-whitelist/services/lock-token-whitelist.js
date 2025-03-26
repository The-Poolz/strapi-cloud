'use strict';

/**
 * lock-token-whitelist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lock-token-whitelist.lock-token-whitelist');
