'use strict';

/**
 * bus service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bus.bus');
