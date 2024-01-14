// components/LoanForm.js
import React from 'react';
import { useFormik } from 'formik';
import { styles } from './styles/formStyles.js'

const LoanForm = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      payingWithCash: 'no',
      downPayment: '',
      interestRate: '',
      points: '',
      loanTerm: '',
    },
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div style={styles?.card}>
      <h2>Step 4: Loan Details</h2>
      <form onSubmit={formik.handleSubmit} style={styles?.form}>
        <div>
          <label htmlFor="payingWithCash">Paying with Cash?</label>
          <select
            id="payingWithCash"
            name="payingWithCash"
            onChange={formik.handleChange}
            value={formik.values.payingWithCash}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="downPayment">Down Payment (%):</label>
          <input
            type="number"
            id="downPayment"
            name="downPayment"
            onChange={formik.handleChange}
            value={formik.values.downPayment}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="interestRate">Interest Rate (%):</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            onChange={formik.handleChange}
            value={formik.values.interestRate}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="points">Points Charged:</label>
          <input
            type="number"
            id="points"
            name="points"
            onChange={formik.handleChange}
            value={formik.values.points}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="loanTerm">Loan Term (years):</label>
          <input
            type="number"
            id="loanTerm"
            name="loanTerm"
            onChange={formik.handleChange}
            value={formik.values.loanTerm}
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

export default LoanForm;
