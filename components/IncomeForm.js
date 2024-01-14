// components/IncomeForm.js
import React from 'react';
import { useFormik } from 'formik';
import { styles } from './styles/formStyles.js'

const IncomeForm = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      grossMonthlyIncome: '',
      services: [],
      incomeGrowth: '',
    },
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div style={styles?.card}>
      <h2>Step 5: Projected Rental Income</h2>
      <form onSubmit={formik.handleSubmit} style={styles?.form}>
        <div>
          <label htmlFor="grossMonthlyIncome">Gross Monthly Income:</label>
          <input
            type="number"
            id="grossMonthlyIncome"
            name="grossMonthlyIncome"
            onChange={formik.handleChange}
            value={formik.values.grossMonthlyIncome}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="services">Additional Services:</label>
          <select
            id="services"
            name="services"
            onChange={(e) =>
              formik.setFieldValue(
                'services',
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            multiple
            value={formik.values.services}
          >
            <option value="rent">Rent</option>
            <option value="laundry">Laundry</option>
            <option value="water">Water</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="incomeGrowth">Optional Annual Income Growth (%):</label>
          <input
            type="number"
            id="incomeGrowth"
            name="incomeGrowth"
            onChange={formik.handleChange}
            value={formik.values.incomeGrowth}
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

export default IncomeForm;
