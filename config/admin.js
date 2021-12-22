module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7afae5a1d89c919d6f858083edfa2269'),
  },
});
