const commentformHandler = async (event) => {
    event.preventDefault();

    const comment_desc = document.getElementById('comment-login').value.trim();
    const blog_id = document.querySelector('input').value;
    console.log(comment_desc, blog_id);

    if (comment_desc) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_desc, blog_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentformHandler);