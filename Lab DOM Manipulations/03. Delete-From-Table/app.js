function deleteByEmail() {
    let input = document.getElementsByTagName('input')[0];
    //console.log(input.value);
    let result = document.getElementById('result');

    let eveEmail = document.getElementsByTagName('td')[1];
    let nickEmail = document.getElementsByTagName('td')[3];
    let didiEmail = document.getElementsByTagName('td')[5];
    let tedyEmail = document.getElementsByTagName('td')[7];

    
    if (!input.value) {
        result.textContent = 'Not found.', "Error message expected.";
        console.log('Not found.');
    } else if (input.value === 'eve@gmail.com') {
        eveEmail.parentElement.remove();
        result.textContent = 'Deleted.';
        //console.log(input.value);
    } else if (input.value === 'nick@yahooo.com') {
        nickEmail.parentElement.remove();
        result.textContent = 'Deleted.';
        //console.log(input.value);
    } else if (input.value === 'didi@didi.net') {
        didiEmail.parentElement.remove();
        result.textContent = 'Deleted.';
        //console.log(input.value);
    } else if (input.value === 'tedy@tedy.com') {
        tedyEmail.parentElement.remove();
        result.textContent = 'Deleted.';
        //console.log(input.value);
    } else {
        result.textContent = 'Not found.', "Error message expected.";
        console.log('Not found.');
    }
    // input.value = '';
}
