document.addEventListener('DOMContentLoaded', function() {
    const educationItems = document.querySelectorAll('.education-item');
    
    educationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.7s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 300);
    });
});