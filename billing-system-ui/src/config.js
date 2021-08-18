const config = {
  billingService: {
    hostname: 'http://localhost:3030',
    endpoints: {
      transactions: '/api/transactions',
      customers: '/api/customers',
    }
  },
};

export default config;
