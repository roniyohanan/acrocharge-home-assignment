import React from 'react';
import NavButton from '../nav-button/nav-button';
import customer from '../../icons/customer.png';
import transaction from '../../icons/transaction.png';
import styles from './home-page.module.scss';

const HomePage = () => (
  <div className={styles.root}>
    <NavButton label="Customers" icon={customer} path="/customers" />
    <NavButton label="Transaction" icon={transaction} path="/transactions" />
  </div>
);

export default HomePage;
