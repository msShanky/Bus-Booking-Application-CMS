'use strict';

/**
 *  bus controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bus.bus');
