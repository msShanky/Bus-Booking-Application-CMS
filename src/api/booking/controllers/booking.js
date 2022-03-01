"use strict";

/**
 *  booking controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::booking.booking", ({ strapi }) => ({
  async create(ctx) {
    // some logic here
    const response = await super.create(ctx);
    // some more logic

    console.log("THE CREATE FUNCTION IS CALLED", strapi);
    return response;
  },
}));
