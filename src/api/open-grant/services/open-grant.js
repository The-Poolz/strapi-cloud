'use strict';

/**
 * open-grant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-grant.open-grant');
