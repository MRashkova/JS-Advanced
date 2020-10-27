function solve(input) {

    let count = input.pop();

    for (let i = 0; i < count % input.length; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(" "));
}
