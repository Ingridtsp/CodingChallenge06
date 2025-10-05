//Step 2: Create base class file called employee
class Employee {
    constructor(name, department) {
    this.name = name;
    this.department = department;
}

describe(){
    return `${this.name} works in ${this.department}`;
}
}

//Step 3: Create manager subclass extending Employee
class Manager extends Employee {
    constructor(name, department, teamSize){
        super(name, department);
        this.teamSize = teamSize;
    }

    //Override the describe() method
describe(){
    return`${this.name} manages a team of ${this.teamSize} people in the ${this.department} department`;

}
}

//Step 4: Create a few sample employees and managers
const emp1 = new Employee ("Melanie Tejada", "Finance");
const emp2 = new Employee ("Melissa Tejada", "Executive Assistant");
const emp3 = new Employee ("Kevin Tejada", "Operations");
const mgr1 = new Manager ("Jade Hidalgo", "Finance", 7);
const mgr2 = new Manager ("Jonathan Hidalgo", "Engineering", 8);
const mgr3 = new Manager ("James Hidalgo", "Operations", 12);


//Step 5: Create company class 
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("Company Employee List:");
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

//Step 6: Instantiate a company object, add both employee manager instances, and call list employees
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(emp3);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);
myCompany.addEmployee(mgr3);

//List all employees
myCompany.listEmployees();
