function solve() {

    let expresion = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');

    document.querySelector('.keys').addEventListener('click', symbolClicked);
    document.querySelector('.clear').addEventListener('click', clear);

    function clear() {
        expresion.textContent = '';
        result.textContent = '';
    }

    function symbolClicked(event) {
        let buttonPressed = event.target.value
        switch (buttonPressed) {
            case "/":
            case "*":
            case "+":
            case "-":
                expresion.textContent += ` ${buttonPressed} `;
                break;
            case "=":
                let [leftOperand, operator, rightOperand] = expresion.textContent.split(' ');

                if (!rightOperand  || !operator == undefined) {
                    result.textContent = 'NaN';
                } else {
                   result.textContent = calculateResult(+leftOperand, operator, +rightOperand);
                }
                break;          
            default:
                expresion.textContent += buttonPressed;

        }
    }
    function calculateResult(leftOperand, operator, rightOperand) {
        switch (operator) {
            case '*':
                return leftOperand * rightOperand;
            case '/':
                return leftOperand / rightOperand;
            case '-':
                return leftOperand - rightOperand;
            case '+':
                return leftOperand + rightOperand;
            
        }
    }
}

