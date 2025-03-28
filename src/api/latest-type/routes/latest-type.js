'use strict';

/**
 * latest-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-type.latest-type');
