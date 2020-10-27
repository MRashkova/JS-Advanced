function solve(input) {
    const listProcessorBuilder = function () {
        let list = [];

        return {
            add: text => list = [...list, text],
            remove: text => list = list.filter(x => x != text),
            print: () => console.log(list.join()),
        }
    }

    let listProcessor = listProcessorBuilder();

    input
        .map(x => x.split(' '))
        .forEach(([command, argument]) => listProcessor[command](argument));

}
