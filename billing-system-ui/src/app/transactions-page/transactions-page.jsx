import React, { useEffect, useState } from 'react';
import Cards from '../cards/cards';
import CreateForm from '../create-form/create-form';
import SearchBar from '../search-bar/search-bar';
import { transactionFields } from './transactions.config';
import TransactionsService from '../../services/transactions.service';
import InfoCard from '../info-card/info-card';
import collectionService from '../../utils/utils';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [value, setValue] = useState('');
  const [searchedTransaction, setSearchedTransaction] = useState(null);
  const [updateTransactions, setUpdateTransactions] = useState(false);

  useEffect(async () => {
    const allTransactions = await TransactionsService.getAll();
    setTransactions(allTransactions);
    if (!searchedTransaction) setUpdateTransactions(false);
  }, [updateTransactions]);

  useEffect(async () => {
    const IdRe = new RegExp(/^[0-9a-fA-F]{24}$/);
    if (!IdRe.test(value)) {
      setSearchedTransaction(null);
    } else {
      const transaction = await TransactionsService.getById(value);
      setSearchedTransaction(transaction);
      setUpdateTransactions(false);
    }
  }, [value, updateTransactions]);

  return (
    <div>
      <SearchBar
        placeholder="search"
        value={value}
        onChange={(val) => setValue(val)}
      />
      {searchedTransaction ? (
        <InfoCard
          key={searchedTransaction.id}
          fields={transactionFields}
          cardData={searchedTransaction}
          collectionName={collectionService.transaction}
          update={setUpdateTransactions}
          deleteCard={setSearchedTransaction}
        />
      ) : (
        <>
          <CreateForm
            fields={transactionFields}
            collectionName={collectionService.transaction}
            update={setUpdateTransactions}
          />
          <Cards
            fields={transactionFields}
            data={transactions}
            collectionName={collectionService.transaction}
            update={setUpdateTransactions}
          />
        </>
      )}
    </div>
  );
};

export default TransactionsPage;
