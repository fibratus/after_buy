import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '1rem' }} />
      <div className="red-text" style={{ marginBottom: '1rem' }}>
        {touched && error}
      </div>
    </div>
  );
};
