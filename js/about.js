document.addEventListener('DOMContentLoaded', function() {
    const languageBadges = document.querySelectorAll('.language-skills .badge');
    
    languageBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });

        badge.addEventListener('click', function() {
            alert(`Niveau de compétence: ${this.textContent}`);
        });
    });
});