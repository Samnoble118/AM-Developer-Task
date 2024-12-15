// Accordion content fetch
fetch('accordion.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('accordionContainer');
        
        // Loop through each item in the fetched data and create an accordion section
        data.forEach((item, index) => {
            const accordion = document.createElement('div');
            accordion.classList.add('accordion');

            const header = document.createElement('div');
            header.classList.add('accordionHeader');
            header.setAttribute('role', 'button');
            header.setAttribute('tabindex', '0');
            header.setAttribute('aria-expanded', 'false');
            header.setAttribute('aria-controls', `content-${index}`);

            const title = document.createElement('h3');
            title.textContent = item.title;

            const plusIcon = document.createElement('img');
            plusIcon.src = 'Assets/Vector.png';
            plusIcon.alt = 'Icon';
            plusIcon.classList.add('plusIconImg'); 

            header.appendChild(title);
            header.appendChild(plusIcon);

            const content = document.createElement('div');
            content.classList.add('accordionContent');
            content.setAttribute('id', `content-${index}`);
            content.setAttribute('role', 'region');
            content.setAttribute('aria-labelledby', `header-${index}`);
            content.innerHTML = `<p>${item.answer}</p>`;
            content.style.maxHeight = "0"; 

            // Toggle accordion content visibility when header is clicked
            header.addEventListener('click', () => toggleAccordion(header, content));

            // Allow toggling accordion with Enter or Space key
            header.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleAccordion(header, content);
                }
            });

            // Append header and content to the accordion div
            accordion.appendChild(header);
            accordion.appendChild(content);
            container.appendChild(accordion);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

// Toggle accordion visibility
function toggleAccordion(header, content) {
    const isOpen = header.getAttribute('aria-expanded') === 'true';
    
    if (isOpen) {
        // If open, collapse it
        header.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
        content.classList.remove('open');
    } else {
        // If closed, expand it
        header.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('open');
    }
}
