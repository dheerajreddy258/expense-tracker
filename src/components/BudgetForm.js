import React, { useState } from 'react';

const BudgetForm = ({ setBudget }) => {
  const [budgetInput, setBudgetInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(parseFloat(budgetInput));
    setBudgetInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Set Budget" value={budgetInput} onChange={(e) => setBudgetInput(e.target.value)} required />
      <button type="submit">Set Budget</button>
    </form>
  );
};

export default BudgetForm;
