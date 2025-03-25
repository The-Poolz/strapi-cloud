'use strict';

/**
 * chain-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chain-setting.chain-setting');
