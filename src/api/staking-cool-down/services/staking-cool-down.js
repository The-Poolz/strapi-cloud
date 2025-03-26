'use strict';

/**
 * staking-cool-down service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staking-cool-down.staking-cool-down');
