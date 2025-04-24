'use strict';

/**
 * auth-role service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auth-role.auth-role');
