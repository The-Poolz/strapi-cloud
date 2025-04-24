'use strict';

/**
 * auth-administrator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auth-administrator.auth-administrator');
