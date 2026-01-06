document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.grid-box, .profile-center-box');
    const clickableBoxes = document.querySelectorAll('.clickable');
    const profileName = document.getElementById('profile-name');
    const profileStatus = document.getElementById('profile-status');
    
    const originalName = "Leonard";
    const originalStatus = "IT Student";

    boxes.forEach((box, index) => {
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";
        box.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        
        setTimeout(() => {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, 150 * index); 
    });

    clickableBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const newInfo = this.getAttribute('data-info');
            const categoryTitle = this.querySelector('h3').innerText;
            updateCenterContent(categoryTitle, newInfo);
            highlightBox(this);
        });
    });

   

});