document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const themeBtn = document.getElementById('themeToggle');
    const hour = new Date().getHours();

    // 1. Dynamic Greeting Logic
    let message = "Good Evening";
    if (hour < 12) message = "Good Morning";
    else if (hour < 18) message = "Good Afternoon";

    greetingElement.innerText = `${message}, I'm Leonard!`;

    // 2. Theme Toggle Logic
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if(document.body.classList.contains('dark-mode')) {
            themeBtn.innerText = "Switch to Light";
        } else {
            themeBtn.innerText = "Switch to Dark";
        }
    });
});