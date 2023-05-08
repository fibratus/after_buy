import React from 'react';
import styles from './SurveyField.module.css'


export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <input {...input} style={{ marginBottom: '1rem' }} />
      <div className="red-text" style={{ marginBottom: '2rem' }}>
        {touched && error}
      </div>
    </div>
  );
};
