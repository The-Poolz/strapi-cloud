'use strict';

/**
 * evm-version service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::evm-version.evm-version');
