const updateBill = async (event) => {
    event.preventDefault();

    const bill_name = document.getElementById('one-bill-name').value;
    const due_date = document.getElementById('one-bill-date').value;
    const amount = document.getElementById('one-bill-amount').value;

    const id = document.querySelector('#bill').value.trim();

    const errorMessageElement = document.getElementById('error-message');errorMessageElement.textContent = '';

    if (amount.includes('$') || amount.includes(',')) {
        errorMessageElement.textContent = "Please remove any '$' or ',' from the amount field.";
        return;
      };

    if(!bill_name || !due_date || !amount){  
        errorMessageElement.textContent = 'Please enter all fields';
        return;
    }

    if(bill_name && due_date && amount){
        const response = await fetch (`/api/bills/${id}`, {
            method: 'PUT',
            body: JSON.stringify({bill_name, due_date, amount}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok){
            document.location.replace('/bills')
        } else {
            alert(response.statusText);
        }
    }
    
}

document.getElementById('one-bill-form').addEventListener('submit', updateBill);