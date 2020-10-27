function solve(input) {
    let step = Number(input.pop());

    input.forEach((num, index) => {
        if (index % step == 0) {
            console.log(num);
        }
    });
}
