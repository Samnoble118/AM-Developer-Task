// Accordion content fetch
fetch('accordian.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('accordianContainer');
        
        data.forEach(item => {
            const accordian = document.createElement('div');
            accordian.classList.add('accordian');

            // Create the header for the accordian
            const header = document.createElement('div');
            header.classList.add('accordianHeader');

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
            content.innerHTML = `<p>${item.answer}</p>`;
            content.style.maxHeight = "0";

            // Accordian toggle
            header.addEventListener('click', () => {
                if (content.classList.contains('open')) {
                    content.style.maxHeight = null;
                    content.classList.remove('open');
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.add('open');
                }
            });

            // Adding header and content to accordian div
            accordian.appendChild(header);
            accordian.appendChild(content);

            container.appendChild(accordian);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
