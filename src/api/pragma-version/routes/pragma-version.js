'use strict';

/**
 * pragma-version router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pragma-version.pragma-version');
