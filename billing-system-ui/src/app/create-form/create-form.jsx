/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './create-form.module.scss';

const CreateForm = ({ fields, collectionName, update }) => {
  const [createForm, setCreateForm] = useState({});
  const [error, setError] = useState(null);

  const changeForm = (value, field) => {
    setCreateForm({ ...createForm, [field]: value });
  };

  const onCreate = async () => {
    try {
      await collectionName.create(createForm);
      update(true);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className={styles.root}>
      {fields.map((field) => {
        return (
          field.field === 'id' ? <span key={field.field} />
            : (
              <div key={field.field} className={styles.row}>
                <p className={styles.text}>{`${field.label}: `}</p>
                <input
                  className={styles.input}
                  placeholder={field.label}
                  onChange={(e) => changeForm(e.target.value, field.field)}
                />
              </div>
            )
        );
      })}
      {error ? <span className={styles.validationErr}>*Not all inputs are valid*</span> : ''}
      <button className={styles.button} onClick={() => onCreate()}>
        Create
      </button>
    </div>
  );
};

export default CreateForm;

CreateForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  collectionName: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};
