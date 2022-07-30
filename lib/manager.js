const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  makeHTML() {
    return `
    <div class="card" style="width: 18rem;">
        <img src="./images/lala-azizli-kMY4UYaCHbA-unsplash.jpg"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6>Manager</h6>
            <p class="card-text">Employee ID: ${this.id}</p>
            <p class="card-text">Employee Email: ${this.email}</p>
            <p class="card-text">My Office Number ${this.officeNumber}</p>
        </div>
    </div>`;
  }
}

module.exports = Manager;
