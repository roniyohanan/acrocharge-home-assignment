export const config = {
  server: {
    name: 'billing-api',
    port: process.env.APPLICATION_PORT || 3000,
  },
  db: {
    connectionString: process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost/billing',
  },
};
