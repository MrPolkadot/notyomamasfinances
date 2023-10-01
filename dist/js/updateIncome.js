const updateIncome = async (event) => {
    event.preventDefault();
  
    const income_amount = document.querySelector('#income').value.trim();
    
    if (income_amount) {
      const response = await fetch('/api/income', {
        method: 'PUT',
        body: JSON.stringify({ income_amount }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to whereever you want
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  }
  document.querySelector('#form').addEventListener('submit', updateIncome);