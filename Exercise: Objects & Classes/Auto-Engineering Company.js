function solve(input) {
    let output = {};

    input.forEach(line => {
        let [brand, model, quantity] = line.split(' | ');        
        quantity = Number(quantity);

        if (output[brand]) {
            if (output[brand][model]) {
                output[brand][model] += quantity;
            } else {
                output[brand][model] = quantity;
            }            
        } else {
            output[brand] = {[model] : quantity}
        }
    });

    let entries = Object.entries(output);

    entries.forEach(entrie => {
        let [brand, models] = entrie;

        let modelEntries = Object.entries(models);
        console.log(brand);

        modelEntries.forEach(modelEntrie => {
            let [model, quantity] = modelEntrie;
            console.log(`###${model} -> ${quantity}`);
        })
    })


}
