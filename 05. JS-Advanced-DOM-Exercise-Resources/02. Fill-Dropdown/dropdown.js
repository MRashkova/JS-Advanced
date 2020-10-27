function addItem() {

    let text = document.getElementById('newItemText');
    let data = document.getElementById('newItemValue');

    let select = document.getElementById('menu');

    let option2 = document.createElement('option');
    option2.value = data.value;
    option2.innerText = text.value;
    let option = `<option value='${data.value}'>${text.value}</option>`

    select.appendChild(option2);

    text.value = '';
    data.value = '';

    // console.log('TODO:...');
}
