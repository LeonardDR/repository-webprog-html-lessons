document.addEventListener('DOMContentLoaded', () => {
    const clickableBoxes = document.querySelectorAll('.clickable');
    const profileName = document.getElementById('profile-name');
    const profileStatus = document.getElementById('profile-status');
    
    const originalName = "Leonard";
    const originalStatus = "IT Student";
    let resetTimer;

    clickableBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            const title = this.querySelector('h3').innerText;
            
            this.style.backgroundColor = "rgba(13, 110, 253, 0.2)";
            setTimeout(() => { this.style.backgroundColor = ""; }, 300);

            clearTimeout(resetTimer);
            profileName.innerText = title;
            profileStatus.innerText = info;

            resetTimer = setTimeout(() => {
                profileName.innerText = originalName;
                profileStatus.innerText = originalStatus;
            }, 5000);
        });
    });

    console.log("Website Loaded: Interactivity and Background ready.");
});