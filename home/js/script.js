// Function to handle interaction with the grid boxes
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const category = box.querySelector('h3').innerText;
            console.log(`You are viewing details for: ${category}`);
            
            // Subtle visual feedback
            box.style.borderColor = "#007bff";
            setTimeout(() => {
                box.style.borderColor = "#ddd";
            }, 500);
        });
    });

    console.log("Profile Grid Script Loaded Successfully.");
});