function solve(input) {
    let result = {};

    input.forEach(line => {
        let [name, price] = line.split(" : ");

        price = Number(price);
        let letter = name[0];

        if(!result[letter]) {
            result[letter] = [];
        }

        let product = {name, price};
        result[letter].push(product);
    });

    let sortedByLetter = Object
        .entries(result).sort((curr, next) => curr[0].localeCompare(next[0]));
    
    for(let i = 0; i < sortedByLetter.length; i++) {
        console.log(sortedByLetter[i][0]);
        let sortByName = sortedByLetter[i][1].sort((curr, next) => curr.name.localeCompare(next.name));
        sortByName.forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        })
    }

}
