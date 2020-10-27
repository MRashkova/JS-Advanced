function solve(input) {

    for (let i = 0; i < input.length - 1; i++) {
        const sumRowOne = input[i].reduce((a,b) => a + b, 0);
        const sumRowTwo = input[i + 1]. reduce((a,b) => a + b, 0);
        let sumCollOne = 0;
        let sumCollTwo = 0;

        for (let j = 0; j < input.length; j++) {
            sumCollOne += input[i][j];
            sumCollTwo += input[i + 1][j];
        }

        if (sumRowOne !== sumRowTwo || sumCollOne !== sumCollTwo) {
            return false;
        }
    }
    return true;
}
