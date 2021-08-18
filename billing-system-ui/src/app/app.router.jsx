import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './home-page/home-page';
import CustomersPage from './customers-page/customers-page';
import TransactionsPage from './transactions-page/transactions-page';

function AppRouter() {
  return (
    <Suspense>
      <Switch>
        <Route path="/customers" component={CustomersPage} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/" component={HomePage} />
        <Redirect from="" to="/" />
      </Switch>
    </Suspense>
  );
}

export default AppRouter;
