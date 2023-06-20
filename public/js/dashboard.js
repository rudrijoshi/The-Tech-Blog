const dbFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#bog-desc').value.trim();

    if (name && description) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: { 'Content-type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    }

};

document.querySelector('.form-group').addEventListener('submit', dbFormHandler);