// Accordion content fetch
fetch('accordian.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('accordianContainer');
        
        data.forEach(item => {
            const accordian = document.createElement('div');
            accordian.classList.add('accordian');

            // Create header container
            const header = document.createElement('div');
            header.classList.add('accordianHeader');

            // Add title (h4) on the left
            const title = document.createElement('h4');
            title.textContent = item.title;

            // Add first image (Vector.png) on the right
            const imgRight = document.createElement('img');
            imgRight.src = 'Assets/Vector.png';
            imgRight.alt = 'Icon';
            imgRight.classList.add('plusIconImg'); 

            // Append title and icon to header
            header.appendChild(title);
            header.appendChild(imgRight);

            // Create content section (hidden by default)
            const content = document.createElement('div');
            content.classList.add('accordianContent');
            content.innerHTML = `<p>${item.answer}</p>`;
            content.style.maxHeight = "0";

            // Add click event listener to toggle visibility
            header.addEventListener('click', () => {
                if (content.classList.contains('open')) {
                    content.style.maxHeight = null;
                    content.classList.remove('open');
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.add('open');
                }
            });

            // Append header and content to accordion
            accordian.appendChild(header);
            accordian.appendChild(content);

            // Append accordion to container
            container.appendChild(accordian);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
