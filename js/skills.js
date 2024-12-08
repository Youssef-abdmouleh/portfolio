document.addEventListener('DOMContentLoaded', function() {
    console.log('Skills page loaded');

    // Optional: Add interactive features for skills
    const skillBadges = document.querySelectorAll('.skills-group .badge');
    
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.classList.remove('bg-primary', 'bg-success');
            this.classList.add('bg-info');
        });

        badge.addEventListener('mouseleave', function() {
            this.classList.remove('bg-info');
            this.classList.add(this.textContent.match(/^\w+$/) ? 'bg-primary' : 'bg-success');
        });
    });
});