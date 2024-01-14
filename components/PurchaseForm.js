// components/PurchaseForm.js
import React from 'react';
import { useFormik } from 'formik';
import { styles } from './styles/formStyles.js'

const PurchaseForm = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      purchasePrice: '',
      closingCosts: '',
    },
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div style={styles?.card}>
      <h2>Step 2: Projected Purchase Price and Closing Costs</h2>
      <form onSubmit={formik.handleSubmit} style={styles?.form}>
        <div>
          <label htmlFor="purchasePrice">Projected Purchase Price:</label>
          <input
            type="number"
            id="purchasePrice"
            name="purchasePrice"
            onChange={formik.handleChange}
            value={formik.values.purchasePrice}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="closingCosts">Closing Costs:</label>
          <input
            type="number"
            id="closingCosts"
            name="closingCosts"
            onChange={formik.handleChange}
            value={formik.values.closingCosts}
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

export default PurchaseForm;
