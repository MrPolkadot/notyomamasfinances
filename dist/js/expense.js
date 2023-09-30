const addExpense = async (event) => {
  event.preventDefault();

  const expense_name = document.querySelector('#name').value.trim();
  const expense_date = document.querySelector('#date').value.trim();
  const amount = document.querySelector('#amount').value.trim();

  if (expense_name && expense_date && amount) {
    const response = await fetch('/api/expenses', {
      method: 'POST',
      body: JSON.stringify({ expense_name, expense_date, amount }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to whereever you want
      document.location.replace('/expenses');
    } else {
      alert(response.statusText);
    }
  }
}
document.querySelector('#form').addEventListener('submit', addExpense);