//10 Challenge
class Employee {
  constructor(name, email) {
    (this.name = name),
      (this.email = email),
      (this.manager = "Libearati"),
      (this.manageremail = "lberato@garced.dev");
  }
}

const companyEmployees = new Employee();

const arr = [
  { name: "Liberato", email: "liberato@garced.dev", coding: true },
  { name: "Erik", email: "erik@garced.dev", coding: true },
  { name: "Marcos", email: "marcos@garced.dev", coding: false },
];
const employeeArr = [];
arr.map((currentItem, i) => {
  employeeArr[i] = new Employee(currentItem.name, currentItem.email);
});

console.log(employeeArr);