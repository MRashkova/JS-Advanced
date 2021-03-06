function solve(input) {
    let output = '<table>\n';
    let employees = [];

    input.forEach(e => {
        employees.push(JSON.parse(e));
    });

    output += arrayAsTable(employees) + '</table>';

    console.log(output);

    function arrayAsTable(employees) {
        let result = '';
    
        employees.forEach(employee => {
            result += '\t<tr>\n';
    
            Object.values(employee).forEach(v => {
                result += `\t\t<td>${v}</td>\n`;
            })
            result += '\t</tr>\n';
        })
        return result;
    }
}
