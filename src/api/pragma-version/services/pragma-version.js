'use strict';

/**
 * pragma-version service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pragma-version.pragma-version');
