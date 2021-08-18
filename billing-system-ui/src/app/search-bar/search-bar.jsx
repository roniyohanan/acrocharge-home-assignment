import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../icons/search-icon.svg';
import styles from './search-bar.module.scss';

const SearchBar = ({ value, onChange }) => (
  <div className={styles.search}>
    <div className={styles.search__input}>
      <input
        placeholder="Search by Id"
        type="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <img src={searchIcon} alt="search" />
    </div>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
