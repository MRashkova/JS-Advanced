function addItem() {
    let items = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');

    liElement.innerHTML = input.value;
    input.value = '';
    items.appendChild(liElement);
}
