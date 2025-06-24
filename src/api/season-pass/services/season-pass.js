'use strict';

/**
 * season-pass service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::season-pass.season-pass');
