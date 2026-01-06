document.addEventListener('DOMContentLoaded', () => {
    const clickableBoxes = document.querySelectorAll('.clickable');
    const nameDisplay = document.getElementById('profile-name');
    const statusDisplay = document.getElementById('profile-status');
    
    // Store original values
    const originalName = nameDisplay.innerText;
    const originalStatus = statusDisplay.innerText;

    clickableBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const infoText = box.getAttribute('data-info');
            const category = box.querySelector('h3').innerText;

            // Update the center box with the clicked content info
            nameDisplay.innerText = category;
            statusDisplay.innerText = infoText;
            statusDisplay.style.fontSize = "0.9rem";
            statusDisplay.style.color = "#555";

            // Reset after 4 seconds
            setTimeout(() => {
                nameDisplay.innerText = originalName;
                statusDisplay.innerText = originalStatus;
                statusDisplay.style.fontSize = "1rem";
                statusDisplay.style.color = "#333";
            }, 4000);
        });
    });

    console.log("Profile Grid Interaction Script Loaded.");
});