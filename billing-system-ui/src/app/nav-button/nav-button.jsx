import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './nav-button.module.scss';

const NavButton = ({ label, icon, path }) => (
  <div className={`${styles.root} ${styles['root-single']}`}>
    <NavLink to={path}>
      <div className={styles.circle}>
        <img src={icon} alt="" className={styles.img} />
      </div>
      <p className={styles.title}>{label}</p>
    </NavLink>
  </div>
);

export default NavButton;

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
