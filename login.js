document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Check against stored users (you might replace this with real authentication logic)
        const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

        if (storedUsers[username] && storedUsers[username] === password) {
            alert('Sign-in successful!');
            window.location.href = 'index.html';
        } else {
            alert('Incorrect username or password.');
        }
    });
});
