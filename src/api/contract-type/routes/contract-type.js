'use strict';

/**
 * contract-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contract-type.contract-type');
