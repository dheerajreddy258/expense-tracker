// import React from 'react';

// const ExpenseList = ({ expenses, deleteExpense }) => {
//   return (
//     <div>
//       <h2>Expenses</h2>
//       <ul>
//         {expenses.map(({ id, amount, category, description, date }) => (
//           <li key={id}>
//             <span>{date} - {amount} - {category} - {description}</span>
//             <button onClick={() => deleteExpense(id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExpenseList;


import React from 'react';

const ExpenseList = ({ expenses, deleteExpense, budget }) => {
  return (
    <div>
        <center>
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>
                <button onClick={() => deleteExpense(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Total:</td>
            <td>
              {expenses.reduce((sum, expense) => sum + expense.amount, 0)}
            </td>
            <td>
              {budget - expenses.reduce((sum, expense) => sum + expense.amount, 0) >= 0 ? (
                <span>Remaining: {budget - expenses.reduce((sum, expense) => sum + expense.amount, 0)}</span>
              ) : (
                <span style={{ color: 'red' }}>
                  Over Budget: {budget - expenses.reduce((sum, expense) => sum + expense.amount, 0)}
                </span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      </center>
    </div>
  );
};

export default ExpenseList;