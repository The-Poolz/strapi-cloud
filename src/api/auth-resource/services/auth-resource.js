'use strict';

/**
 * auth-resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auth-resource.auth-resource');
