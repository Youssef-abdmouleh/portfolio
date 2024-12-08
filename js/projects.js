document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.card');
    
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.7s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, index * 300);

        // Tooltip functionality
        const cardTitle = card.querySelector('.card-title');
        cardTitle.setAttribute('title', 'Cliquez pour plus de détails');
        
        cardTitle.addEventListener('click', function() {
            const cardText = card.querySelector('.card-text');
            const technologies = card.querySelector('ul');
            
            if (cardText.style.display === 'none') {
                cardText.style.display = 'block';
                technologies.style.display = 'block';
            } else {
                cardText.style.display = 'none';
                technologies.style.display = 'none';
            }
        });
    });
});