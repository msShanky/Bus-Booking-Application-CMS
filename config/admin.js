module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3cb48a1e5585d530acda9121b6881ae'),
  },
});
