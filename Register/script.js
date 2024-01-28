document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (email.value.trim() === '' || username.value.trim() === '' || password.value.trim() === '') {
        alert('Please fill in all required fields.');
        return;
    }

    //add logic here for form submission.
});