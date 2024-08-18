document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const navPart2 = document.querySelector('.nav-part2');
    const signInBtn = document.getElementById('signInBtn');
    const exploreBtn = document.getElementById('exploreBtn');

    // Toggle navigation menu on mobile view
    menuIcon.addEventListener('click', () => {
        if (navPart2.style.display === 'flex') {
            navPart2.style.display = 'none';
        } else {
            navPart2.style.display = 'flex';
        }
    });

    // Handle Sign In button click
    signInBtn.addEventListener('click', () => {
        alert('Sign In button clicked!');
    });

    // Handle Explore Now button click
    exploreBtn.addEventListener('click', () => {
        window.location.href = 'https://example.com'; // Replace with your desired URL
    });
});
