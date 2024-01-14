// components/RehabForm.js
import React from 'react';
import { useFormik } from 'formik';
import { styles } from './styles/formStyles.js'

const RehabForm = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      rehab: 'no',
    },
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div style={styles?.card}>
      <h2>Step 3: Will You Be Rehabbing?</h2>
      <form onSubmit={formik.handleSubmit} style={styles?.form}>
        <div>
          <label htmlFor="rehab">Will you be rehabbing?</label>
          <select
            id="rehab"
            name="rehab"
            onChange={formik.handleChange}
            value={formik.values.rehab}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <button type="submit" style={styles?.button}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default RehabForm;
