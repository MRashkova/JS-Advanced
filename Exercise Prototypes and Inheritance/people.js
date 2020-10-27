function solve() {
    class Employee {
        constructor (name, age) {
            this.name = name;
            this.age = age;
            this.tasks = [];
            this.salary = 0;
        }

        work () {
            let task = this.tasks.shift();
            console.log(`${this.name} ${task}`);
            this.tasks.push(task);
        }

        collectSalary () {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary () {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super (name, age);
            this.tasks.push('is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super (name, age);
            this.tasks.push('is working on a complicated task.');
            this.tasks.push('is taking time off work.');
            this.tasks.push('is supervising junior workers.');

        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super (name, age);
            this.tasks.push('scheduled a meeting.');
            this.tasks.push('is preparing a quarterly report.');
            this.dividend = 0;
        }

        getSalary () {
            return this.dividend + this.salary;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}
