// accordian content fetch

    fetch('accordian.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('accordianContainer');
            
            data.forEach(item => {
                const accordian = document.createElement('div');
                accordian.classList.add('accordian');

                const header = document.createElement('div');
                header.classList.add('accordianHeader');
                header.innerHTML = `<h4>${item.title}</h4>`;

                const content = document.createElement('div');
                content.classList.add('accordianContent');
                content.innerHTML = `<p>${item.answer}</p>`;

                accordian.appendChild(header);
                accordian.appendChild(content);
                container.appendChild(accordian);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));

