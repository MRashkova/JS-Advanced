function solve(input) {

    input
    .sort((current, next) => compare(current, next))
    .forEach(e => console.log(e));
    
    function compare(current, next) {
        if (current.length > next.length) {
            return 1
        } else if (current.length === next.length) {
            return current.localeCompare(next);
        } else {
            return -1;
        }
    }
}
