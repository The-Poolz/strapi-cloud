'use strict';

/**
 * auto-sign-up service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auto-sign-up.auto-sign-up');
