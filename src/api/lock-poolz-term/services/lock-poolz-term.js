'use strict';

/**
 * lock-poolz-term service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lock-poolz-term.lock-poolz-term');
