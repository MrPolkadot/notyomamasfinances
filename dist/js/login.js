// Needs to be structured for this project

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to whereever you want
      document.location.replace('/');
    } else {
      alert('Incorrect email or password!');
      response.json({ message: 'Incorrect email or password!'})
    }
  }
};



document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


