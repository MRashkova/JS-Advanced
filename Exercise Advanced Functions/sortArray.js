function solve(input, criteria) {
    let sortFunction = {
        asc: function (arr) {
            return arr.sort((a, b) => a - b)
        },
        desc: function (arr) {
            return arr.sort((a, b) => b - a)
        }
    } 
    let func = sortFunction[criteria];
    return func(input);
}
