function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let enteredEmail = input.value;
    //console.log(input.value);
    let customerEmails = document.querySelectorAll('#customers td:nth-of-type(2)');
    let isDeleted = false;
    
    for (const customerElement of customerEmails) {
        if (customerElement.textContent === enteredEmail) {
            customerElement.parentElement.remove();
            isDeleted = true;
        }
    }

    if (!isDeleted) {
        let resultElement = document.getElementById('result');
        resultElement.textContent = 'Not found.';
    }
}
