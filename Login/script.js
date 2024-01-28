document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (username.value.trim() === '' || password.value.trim() === '') {
        alert('Please enter both username and password.');
        return;
    }

    // add logic here for form submission.
});