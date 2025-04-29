'use strict';

/**
 * evm-version router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::evm-version.evm-version');
