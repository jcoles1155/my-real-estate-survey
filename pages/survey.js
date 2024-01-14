// pages/real-estate-survey.js
import React, { useState } from 'react';
import AddressForm from '@/components/AddressForm';
import PurchaseForm from '@/components/PurchaseForm';
import RehabForm from '@/components/RehabForm';
import LoanForm from '@/components/LoanForm';
import IncomeForm from '@/components/IncomeForm';
import ExpensesForm from '@/components/ExpensesForm';
import Graph from '@/components/Graph';
import Report from '@/components/Report';

const RealEstateSurveyPage = () => {
  const [step, setStep] = useState(1);
  const [propertyData, setPropertyData] = useState({});
  const [purchaseData, setPurchaseData] = useState({});
  const [rehabData, setRehabData] = useState({});
  const [loanData, setLoanData] = useState({});
  const [incomeData, setIncomeData] = useState({});
  const [expensesData, setExpensesData] = useState({});
  const [showReport, setShowReport] = useState(false);

  const handleNext = (data) => {
    switch (step) {
      case 1:
        setPropertyData(data);
        break;
      case 2:
        setPurchaseData(data);
        break;
      case 3:
        setRehabData(data);
        break;
      case 4:
        setLoanData(data);
        break;
      case 5:
        setIncomeData(data);
        break;
      case 6:
        setExpensesData(data);
        setShowReport(true);
        break;
      default:
        break;
    }
    setStep(step + 1);
  };

  return (
    <div>
      <h1>Real Estate Survey</h1>
      {!showReport ? (
        <>
          {step === 1 && <AddressForm onNext={handleNext} />}
          {step === 2 && <PurchaseForm onNext={handleNext} />}
          {step === 3 && <RehabForm onNext={handleNext} />}
          {step === 4 && <LoanForm onNext={handleNext} />}
          {step === 5 && <IncomeForm onNext={handleNext} />}
          {step === 6 && <ExpensesForm onNext={handleNext} />}
        </>
      ) : (
        <>
          <Report
            propertyData={propertyData}
            purchaseData={purchaseData}
            rehabData={rehabData}
            loanData={loanData}
            incomeData={incomeData}
            expensesData={expensesData}
          />
          <Graph
            data={{
              labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'], // Replace with your month labels
              netCashFlow: [1000, 2000, 3000, 4000], // Replace with your calculated net cash flow data
            }}
          />
        </>
      )}
    </div>
  );
};

export default RealEstateSurveyPage;
