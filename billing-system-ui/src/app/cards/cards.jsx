import React from 'react';
import PropTypes from 'prop-types';
import InfoCard from '../info-card/info-card';
import styles from './cards.module.scss';

const Cards = ({
  fields, data, collectionName, update
}) => (
  <div className={styles.root}>
    {data.map((cardData) => (
      <InfoCard
        key={cardData.id}
        fields={fields}
        cardData={cardData}
        collectionName={collectionName}
        update={update}
      />
    ))}
  </div>
);

export default Cards;

Cards.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  collectionName: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};
