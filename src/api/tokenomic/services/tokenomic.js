'use strict';

/**
 * tokenomic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tokenomic.tokenomic');
