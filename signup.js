document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('signUpUsername').value;
        const password = document.getElementById('signUpPassword').value;

        // Check if user already exists
        const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

        if (storedUsers[username]) {
            alert('Username already exists. Please choose a different one.');
        } else {
            // Save new user
            storedUsers[username] = password;
            localStorage.setItem('users', JSON.stringify(storedUsers));
            alert('Sign-up successful! You can now sign in.');
            window.location.href = 'login.html';
        }
    });
});
