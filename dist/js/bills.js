
const addBill = async (e) => {
    e.preventDefault();

    const bill_name = document.getElementById('bill-name').value.trim();
    const due_date = document.getElementById('bill-date').value.trim();
    const amount = document.getElementById('bill-amount').value.trim();

    if (amount.includes('$') || amount.includes(',')) {
      alert("Please remove any '$' or ',' from the amount field.");
      return; 
    };

    if(bill_name && due_date && amount) {
        const response = await fetch('/api/bills', {
            method: 'POST',
            body: JSON.stringify({ bill_name, due_date, amount }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            // If successful, redirect the browser to whereever you want
            document.location.replace('/bills');
          } else {
            alert(response.statusText);
          }
    }
}

document.querySelector('#bill-form').addEventListener('submit', addBill);

