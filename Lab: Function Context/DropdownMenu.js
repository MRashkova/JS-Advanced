function solve () {
    let dropdownElement = document.getElementById('dropdown-ul');
    let dropdownButtonElement = document.getElementById('dropdown');
    let boxElement = document.getElementById('box');

    dropdownButtonElement.addEventListener('click', () => {

        let toggleDisplay = dropdownElement.style.display != 'block'
            ? 'block'
            : 'none';

        if (toggleDisplay == 'none') {
            boxElement.style.backgroundColor = 'black';
            boxElement.style.color = 'white'
        }

        dropdownElement.style.display = toggleDisplay;
    });

    dropdownElement.addEventListener('click', e => {
        boxElement.style.backgroundColor = e.target.textContent;
        boxElement.style.color = 'black';
    })
}
