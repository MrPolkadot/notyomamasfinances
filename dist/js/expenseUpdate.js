const updateExpense = async (event) => {
    event.preventDefault();

    const expense_name = document.getElementById('expense-name').value;
    const expense_date = document.getElementById('expense-date').value;
    const amount = document.getElementById('expense-amount').value;

    const id = document.querySelector('#expense-id').value.trim();

    const errorMessageElement = document.getElementById('expense-err');errorMessageElement.textContent = '';

    

    if(!expense_name || !expense_date || !amount){  
        errorMessageElement.textContent = 'Please enter all fields';
        return;
    }

    if(expense_name && expense_date && amount){
        const response = await fetch (`/api/expenses/${id}`, {
            method: 'PUT',
            body: JSON.stringify({expense_name, expense_date, amount}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok){
            document.location.replace('/expenses')
        } else {
            alert(response.statusText);
        }
    }
    
}

document.getElementById('expense-form').addEventListener('submit', updateExpense);