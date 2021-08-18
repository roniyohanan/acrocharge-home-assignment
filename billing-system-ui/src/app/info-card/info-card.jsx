/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './info-card.module.scss';

const InfoCard = ({
  fields, cardData, collectionName, update, deleteCard,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const { id, ...data } = cardData;
    setUpdateInfo(data);
  }, []);

  const changeInfo = (value, field) => {
    setUpdateInfo({ ...updateInfo, [field]: value });
  };

  const onUpdate = async () => {
    try {
      await collectionName.updateById(cardData.id, updateInfo);
      setEditMode(false);
      update(true);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  const onDelete = async () => {
    await collectionName.deleteById(cardData.id);
    if (deleteCard) deleteCard(null);
    update(true);
  };

  return (
    <div className={styles.root}>
      {fields.map((field) => (
        <div key={field.field}>
          {!editMode ? (
            <p>{`${field.label}: ${cardData[field.field]}`}</p>
          ) : (
            <div className={styles.row}>
              {field.field === 'id' ? <p>{`${field.label}: ${cardData[field.field]}`}</p>
                : (
                  <>
                    <p className={styles.text}>{`${field.label}: `}</p>
                    <input
                      className={styles.input}
                      placeholder={field.label}
                      value={updateInfo[field.field]}
                      onChange={(e) => changeInfo(e.target.value, field.field)}
                    />
                  </>
                )}
            </div>
          )}
        </div>
      ))}
      {error ? <span className={styles.validationErr}>*Not all inputs are valid*</span> : ''}
      {!editMode ? (
        <div>
          <button className={styles.button} onClick={() => setEditMode(true)}>
            Edit
          </button>
          <button className={styles.button} onClick={() => onDelete()}>Delete</button>
        </div>
      ) : (
        <button className={styles.button} onClick={() => onUpdate()}>
          Update
        </button>
      )}
    </div>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cardData: PropTypes.shape({}).isRequired,
  collectionName: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  deleteCard: PropTypes.func,
};

InfoCard.defaultProps = {
  deleteCard: null,
};
