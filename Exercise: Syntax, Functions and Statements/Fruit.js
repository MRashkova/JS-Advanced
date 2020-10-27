function solve (fruit, weight, money) {
    let kgWeight = weight / 1000;
    let neededMoney =  kgWeight * money;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${kgWeight.toFixed(2)} kilograms ${fruit}.`);
}
