const deleteBtn = document.getElementById('expense-delete');

const deleteExpense = async (event) => {
    event.preventDefault();
  
    const id = document.querySelector('#expense-id').value.trim();
    
    const response = await fetch(`/api/expenses/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });
  
    if (response.ok) {
      // If successful, redirect the browser to whereever you want
      document.location.replace('/expenses');
    } else {
      alert(response.statusText);
    }
      
  };
  
  deleteBtn.addEventListener('click', deleteExpense);