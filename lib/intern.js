const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
  makeHTML() {
    return `
    <div class="card" style="width: 18rem;">
        <img src="./images/dollar-gill-Kyoshy7BJIQ-unsplash.jpg"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6>Intern</h6>
            <p class="card-text">Employee ID: ${this.id}</p>
            <p class="card-text">Employee Email: ${this.email}</p>
            <p class="card-text">My School is ${this.school}</p>
        </div>
    </div>`;
  }
}
module.exports = Intern;