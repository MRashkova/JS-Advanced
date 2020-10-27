function solve(first, second) {
    first = Number(first);
    second = Number(second);

    let lower = Math.min(first, second);
    let bigger = Math.max(first, second);
    let output = 0;
    for (let i = lower; i >= 0; i--) {
        if (bigger % i == 0 && lower % i == 0) {
            output = i;
            break;
        }        
    }   
    console.log(output);
}
