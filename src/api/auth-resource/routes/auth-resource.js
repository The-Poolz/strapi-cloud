'use strict';

/**
 * auth-resource router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::auth-resource.auth-resource');
