// components/AddressForm.js
import React from 'react';
import { useFormik } from 'formik';
// import { styles } from '@/styles/forms.module.scss';
import { styles } from './styles/formStyles.js'

const AddressForm = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      address: '',
    },
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div style={styles?.card}>
      <h2>Step 1: Enter Address</h2>
      <form onSubmit={formik.handleSubmit} style={styles?.form}>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            style={styles?.input}
          />
        </div>
        <div>
          <button type="submit" style={styles?.button}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;