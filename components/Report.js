// components/Report.js
import React, { useEffect, useState } from 'react';

const Report = ({
  propertyData,
  purchaseData,
  rehabData,
  loanData,
  incomeData,
  expensesData,
}) => {
  // State to store the calculated ROI
  const [roi, setROI] = useState(0);

  // Use useEffect to calculate ROI when component mounts
  useEffect(() => {
    // Calculate ROI based on the data received
    const {
      grossMonthlyIncome,
      incomeGrowth,
    } = incomeData;

    const {
      purchasePrice,
      closingCosts,
    } = purchaseData;

    const {
      propertyTaxes,
      insurance,
      repairs,
      vacancyPercentage,
      capitalExpenditures,
      managementFees,
      electricity,
      gas,
      waterAndSewer,
      hoa,
      garbage,
      other,
    } = expensesData;

    // You can implement your ROI calculation here based on your specific formula
    // For simplicity, let's assume a basic formula for ROI
    const income = grossMonthlyIncome * 12;
    const expenses =
      propertyTaxes +
      insurance +
      repairs +
      (vacancyPercentage / 100) * income +
      capitalExpenditures +
      managementFees +
      electricity +
      gas +
      waterAndSewer +
      hoa +
      garbage +
      other;
    
    // Calculate ROI (simplified for demonstration)
    const netIncome = income - expenses;
    const initialInvestment = purchasePrice + closingCosts;
    const roiValue = (netIncome / initialInvestment) * 100;

    setROI(roiValue);
  }, [incomeData, expensesData, purchaseData]);

return (
    <div>
        <h2>ROI Report</h2>
        <h3>Property Details</h3>
        <p>Property Name: {propertyData.name}</p>
        {/* Return home button */}
        <a href="/" passHref={true}>
            <button>Return Home</button>
        </a>
        <p>Property Address: {propertyData.address}</p>
        {/* Display other property details if needed */}
        <p>ROI (Return on Investment): {roi.toFixed(2)}%</p>
        {/* You can display additional information and the ROI graph here */}
    </div>
);
};

export default Report;
