const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const password = document.querySelector('#password-login').value.trim();
    const name = document.querySelector('#email-login').value.trim();
    console.log(name, password);
    if (password && name) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};



document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

