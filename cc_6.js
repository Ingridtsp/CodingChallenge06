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
