function solve (input) {
    const carFactoryBuilder = () => {
        let cars = {};

        return {
            create: (name, inherit, parent) => cars[name] = inherit ? Object.create(cars[parent]) : {},
            set: (name, key, value) => cars[name][key] = value,
            print: (name) => {
                let result = [];

                for (const key in cars[name]) {
                    result.push(`${key}:${cars[name][key]}`)           
                }
                console.log(result.join(', '));
            }
        };
    };

    let carFactory = carFactoryBuilder();

    input
        .map(x => x.split(' '))
        .forEach(([
            command,
            ...args
        ]) => carFactory[command].apply(null, args));
}
