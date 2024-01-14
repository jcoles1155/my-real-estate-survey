// components/ExpensesForm.js
import React from 'react';
import { useFormik } from 'formik';
import { styles } from './styles/formStyles.js'

const ExpensesForm = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      propertyTaxes: '',
      insurance: '',
      repairs: '',
      vacancyPercentage: '',
      capitalExpenditures: '',
      managementFees: '',
      electricity: '',
      gas: '',
      waterAndSewer: '',
      hoa: '',
      garbage: '',
      other: '',
    },
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div style={styles?.card}>
      <h2>Step 6: Monthly Expenses</h2>
      <form onSubmit={formik.handleSubmit} style={styles?.form}>
        <div>
          <label htmlFor="propertyTaxes">Property Taxes:</label>
          <input
            type="number"
            id="propertyTaxes"
            name="propertyTaxes"
            onChange={formik.handleChange}
            value={formik.values.propertyTaxes}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="insurance">Insurance:</label>
          <input
            type="number"
            id="insurance"
            name="insurance"
            onChange={formik.handleChange}
            value={formik.values.insurance}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="repairs">Repairs and Maintenance:</label>
          <input
            type="number"
            id="repairs"
            name="repairs"
            onChange={formik.handleChange}
            value={formik.values.repairs}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="vacancyPercentage">Vacancy Percentage:</label>
          <input
            type="number"
            id="vacancyPercentage"
            name="vacancyPercentage"
            onChange={formik.handleChange}
            value={formik.values.vacancyPercentage}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="capitalExpenditures">Capital Expenditures:</label>
          <input
            type="number"
            id="capitalExpenditures"
            name="capitalExpenditures"
            onChange={formik.handleChange}
            value={formik.values.capitalExpenditures}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="managementFees">Management Fees:</label>
          <input
            type="number"
            id="managementFees"
            name="managementFees"
            onChange={formik.handleChange}
            value={formik.values.managementFees}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="electricity">Electricity:</label>
          <input
            type="number"
            id="electricity"
            name="electricity"
            onChange={formik.handleChange}
            value={formik.values.electricity}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="gas">Gas:</label>
          <input
            type="number"
            id="gas"
            name="gas"
            onChange={formik.handleChange}
            value={formik.values.gas}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="waterAndSewer">Water and Sewer:</label>
          <input
            type="number"
            id="waterAndSewer"
            name="waterAndSewer"
            onChange={formik.handleChange}
            value={formik.values.waterAndSewer}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="hoa">HOA:</label>
          <input
            type="number"
            id="hoa"
            name="hoa"
            onChange={formik.handleChange}
            value={formik.values.hoa}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="garbage">Garbage:</label>
          <input
            type="number"
            id="garbage"
            name="garbage"
            onChange={formik.handleChange}
            value={formik.values.garbage}
            style={styles?.input}
          />
        </div>
        <div>
          <label htmlFor="other">Other:</label>
          <input
            type="number"
            id="other"
            name="other"
            onChange={formik.handleChange}
            value={formik.values.other}
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

export default ExpensesForm;
