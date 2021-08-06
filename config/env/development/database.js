module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        host: env('DATABASE_DEV_HOST', 'localhost'),
        port: env.int('DATABASE_DEV_PORT', 27017),
        database: env('DATABASE_DEV_NAME', 'lcpcaracas_db'),
      },
    },
  },
});
