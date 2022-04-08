module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26d7e962f7e0ddf5d7832077f37408f7'),
  },
});
