//its the key value pair object
let employee = {
    empNumber: 1001, // number type
    empName: 'John Doe', // string type
    isPermanent: true, // boolean type
    address: undefined, // undefined type
    salary: null, // null type
    empSymbol: Symbol('empId'), // symbol type
    //nested object
    department: {
        deptName: 'Engineering',
        deptCode: 'ENG001'
    }
};

console.log(employee.empNumber);
employee.isPermanent = true; // updating value
console.log(employee);
console.log(employee.department.deptName);
