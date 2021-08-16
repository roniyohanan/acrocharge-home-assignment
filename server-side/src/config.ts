export const config = {
  server: {
    name: 'billing-api',
    port: process.env.APPLICATION_PORT || 3000,
  },
  db: {
    connectionString: process.env.MONGO_CONNECTION_STRING || `mongodb://${process.env.DB_SERVERS || 'localhost:27017'}/${process.env.DB_NAME || 'billing-api'}${process.env.DB_REPLICA_NAME ? `?replicaSet=${process.env.DB_REPLICA_NAME}` : ''}`,
  },
};
