import React, { useEffect, useState } from 'react';
import Cards from '../cards/cards';
import CreateForm from '../create-form/create-form';
import SearchBar from '../search-bar/search-bar';
import { customerFields } from './customers.config';
import CustomersService from '../../services/customers.service';
import InfoCard from '../info-card/info-card';
import collectionService from '../../utils/utils';

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [value, setValue] = useState('');
  const [searchedCustomer, setSearchedCustomer] = useState(null);
  const [updateCustomers, setUpdateCustomers] = useState(false);

  useEffect(async () => {
    const allCustomers = await CustomersService.getAll();
    setCustomers(allCustomers);
    if (!searchedCustomer) setUpdateCustomers(false);
  }, [updateCustomers]);

  useEffect(async () => {
    const IdRe = new RegExp(/^[0-9a-fA-F]{24}$/);
    if (!IdRe.test(value)) {
      setSearchedCustomer(null);
    } else {
      const customer = await CustomersService.getById(value);
      setSearchedCustomer(customer);
      setUpdateCustomers(false);
    }
  }, [value, updateCustomers]);

  return (
    <div>
      <SearchBar
        placeholder="search"
        value={value}
        onChange={(val) => setValue(val)}
      />
      {searchedCustomer ? (
        <InfoCard
          key={searchedCustomer.id}
          fields={customerFields}
          cardData={searchedCustomer}
          collectionName={collectionService.customer}
          update={setUpdateCustomers}
          deleteCard={setSearchedCustomer}
        />
      )
        : (
          <>
            <CreateForm
              fields={customerFields}
              collectionName={collectionService.customer}
              update={setUpdateCustomers}
            />
            <Cards
              fields={customerFields}
              data={customers}
              collectionName={collectionService.customer}
              update={setUpdateCustomers}
            />
          </>
        )}
    </div>
  );
};

export default CustomersPage;
