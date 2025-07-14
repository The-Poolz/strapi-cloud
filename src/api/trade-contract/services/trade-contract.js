'use strict';

/**
 * trade-contract service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trade-contract.trade-contract');
