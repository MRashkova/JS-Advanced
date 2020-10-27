function solve(input) {
    let num = Number(input.shift());

    for(let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.8;
                break;
            default:
                break;
        }
        console.log(num);
    }    
}
