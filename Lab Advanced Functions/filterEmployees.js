function solve(input, criteria) {
    let employees = JSON.parse(input);
    let [key, value] = criteria.split('-');

    employees
        .filter(filterEmployees)
        .forEach((x, i) => {
            console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`);
        });
        function filterEmployees (employee) {
            return employee[key] == value || key == 'all'
        }
}
