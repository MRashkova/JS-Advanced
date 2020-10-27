function solve(input) {

    //let output = [];
    let max = Number.MIN_SAFE_INTEGER;

    let output = input.reduce((acc, curr) => {
        if (max <= curr) {
            max = curr;
            acc.push(max);
        }
        return acc;
    }, [])
    console.log(output.join("\n"));
}
