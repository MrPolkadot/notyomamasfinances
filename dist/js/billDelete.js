const deleteBtn = document.getElementById('one-bill-delete');

const deleteBill = async (event) => {
    event.preventDefault();
  
    const id = document.querySelector('#bill').value.trim();
    
    const response = await fetch(`/api/bills/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });
  
    if (response.ok) {
      // If successful, redirect the browser to whereever you want
      document.location.replace('/bills');
    } else {
      alert(response.statusText);
    }
      
  };
  
  
  deleteBtn.addEventListener('click', deleteBill);