function solve() {
    let container = document.getElementById('container');
    let name = container.getElementsByTagName('input')[0];
    let hall = container.getElementsByTagName('input')[1];
    let ticketPrice = container.getElementsByTagName('input')[2];

    let movies = document.getElementById('movies');
    let ulElementMovies = movies.getElementsByTagName('ul')[0];

    let onScreenButton = container.getElementsByTagName('button')[0];

    let archive = document.getElementById('archive');
    let ulElementArchive = archive.getElementsByTagName('ul')[0];

    let clearButton = archive.lastElementChild;


    onScreenButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (name.value == '' || hall.value == '' || ticketPrice.value == '') {
            return;
        }

        if (!Number(ticketPrice.value)) { // What if cat is 0 year old?
            return;
        };

        let liElement = document.createElement('li');
        ulElementMovies.appendChild(liElement);

        let spanElemenet = document.createElement('span');
        liElement.appendChild(spanElemenet);
        spanElemenet.textContent = `${name.value}`;

        let strongElement = document.createElement('strong');
        liElement.appendChild(strongElement);
        strongElement.textContent = `Hall: ${hall.value}`;

        let divElement = document.createElement('div');
        liElement.appendChild(divElement);

        let strongPrice = document.createElement('strong');
        divElement.appendChild(strongPrice);
        strongPrice.textContent = `${ticketPrice.value}`;

        let inputTickets = document.createElement('input');
        divElement.appendChild(inputTickets);
        inputTickets.placeholder = 'Tickets Sold';

        let archiveButton = document.createElement('button');
        divElement.appendChild(archiveButton);
        archiveButton.textContent = 'Archive';

        archiveButton.addEventListener('click', e => {
            if (!Number(inputTickets.value)) { // What if cat is 0 year old?
                return;
            };

            let totalAmount = inputTickets.value * Number(strongPrice.textContent);

            ulElementArchive.appendChild(liElement);

            strongElement.remove();
            liElement.lastElementChild.remove();

            let strongTotalAmount = document.createElement('strong');
            liElement.appendChild(strongTotalAmount);
            strongTotalAmount.textContent = `Total amount: ${totalAmount.toFixed(2)}`;

            let deleteButton = document.createElement('button');
            liElement.appendChild(deleteButton);
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', e => {
                liElement.remove();
            })
        })

        clearButton.addEventListener('click', e => {
            ulElementArchive.innerHTML = '';
        })

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';
    })    

}
