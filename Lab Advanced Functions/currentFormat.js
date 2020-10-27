function dollarFormatterBuilder(currencyFormatter) {
    let separator = ',';
    let symbol = '$';
    let symbolFirst = true;

    let dollarFormatter =  currencyFormatter.bind(null, separator, symbol, symbolFirst);
    return dollarFormatter;
}
