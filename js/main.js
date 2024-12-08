// Global JavaScript for the website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Personal website loaded successfully!');

    // Add any global functionality here
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});