'use strict';

/**
 * latest-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-type.latest-type');
