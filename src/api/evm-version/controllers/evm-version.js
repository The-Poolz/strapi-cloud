'use strict';

/**
 * evm-version controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::evm-version.evm-version');
