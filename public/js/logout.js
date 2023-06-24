async function logout() {
    const response = await fetch(`/api/users/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
document.querySelector('#logout').addEventListener('click', logout);