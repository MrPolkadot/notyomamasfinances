const addBill = async (event) => {
    event.preventDefault();

    const bill_name = document.querySelector('#name').value.trim();
    const due_date = document.querySelector('#date').value.trim();
    const amount = document.querySelector('#amount').value.trim();

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
document.querySelector('#form').addEventListener('submit', addBill);