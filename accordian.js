// Accordion content fetch
fetch('accordian.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('accordianContainer');
        
        data.forEach((item, index) => {
            const accordian = document.createElement('div');
            accordian.classList.add('accordian');

            const header = document.createElement('div');
            header.classList.add('accordianHeader');
            header.setAttribute('role', 'button');
            header.setAttribute('tabindex', '0');
            header.setAttribute('aria-expanded', 'false');
            header.setAttribute('aria-controls', `content-${index}`);

            const title = document.createElement('h4');
            title.textContent = item.title;

            const plusIcon = document.createElement('img');
            plusIcon.src = 'Assets/Vector.png';
            plusIcon.alt = 'Icon';
            plusIcon.classList.add('plusIconImg'); 

            header.appendChild(title);
            header.appendChild(plusIcon);

            const content = document.createElement('div');
            content.classList.add('accordianContent');
            content.setAttribute('id', `content-${index}`);
            content.setAttribute('role', 'region');
            content.setAttribute('aria-labelledby', `header-${index}`);
            content.innerHTML = `<p>${item.answer}</p>`;
            content.style.maxHeight = "0";

            // Toggle accordion on click
            header.addEventListener('click', () => toggleAccordion(header, content));

            // Toggle accordion on Enter/Space key press
            header.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleAccordion(header, content);
                }
            });

            // Adding header and content to accordion div
            accordian.appendChild(header);
            accordian.appendChild(content);
            container.appendChild(accordian);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

// Accordian toggle
function toggleAccordion(header, content) {
    const isOpen = header.getAttribute('aria-expanded') === 'true';
    
    if (isOpen) {
        header.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
        content.classList.remove('open');
    } else {
        header.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('open');
    }
}
