// Dark button image hover change
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.theButton');

    buttons.forEach(button => {
        const buttonImg = button.querySelector('.arrowImg'); 

        button.addEventListener('mouseover', () => {
            buttonImg.src = "Assets/square-arrow-right-black.png";
        });

        button.addEventListener('mouseout', () => {
            buttonImg.src = "Assets/square-arrow-right-white.png";
        });
    });
});
// Light button image hover change
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.theLightButton');

    buttons.forEach(button => {
        const buttonImg = button.querySelector('.arrowImg'); 

        button.addEventListener('mouseover', () => {
            buttonImg.src = "Assets/square-arrow-right-white.png";
        });

        button.addEventListener('mouseout', () => {
            buttonImg.src = "Assets/square-arrow-right-black.png";
        });
    });
});