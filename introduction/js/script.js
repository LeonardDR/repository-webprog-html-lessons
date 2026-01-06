document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.grid-box, .profile-center-box');
    const clickableBoxes = document.querySelectorAll('.clickable');
    const profileName = document.getElementById('profile-name');
    const profileStatus = document.getElementById('profile-status');
    
    const originalName = "Leonard";
    const originalStatus = "IT Student";
    let resetTimer;

    boxes.forEach((box, index) => {
        box.style.opacity = "0";
        box.style.transform = "scale(0.9)";
        box.style.transition = "all 0.5s ease-out";
        
        setTimeout(() => {
            box.style.opacity = "1";
            box.style.transform = "scale(1)";
        }, 100 * index); 
    });

    clickableBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            const title = this.querySelector('h3').innerText;
            
            updateCenter(title, info);
            
            this.style.backgroundColor = "white";
            setTimeout(() => { this.style.backgroundColor = ""; }, 300);
        });
    });

    function updateCenter(title, message) {
        clearTimeout(resetTimer);
        
        profileName.innerText = title;
        profileStatus.innerText = message;
        profileStatus.style.fontSize = "0.85rem";

        resetTimer = setTimeout(() => {
            profileName.innerText = originalName;
            profileStatus.innerText = originalStatus;
            profileStatus.style.fontSize = "1rem";
        }, 5000);
    }
});