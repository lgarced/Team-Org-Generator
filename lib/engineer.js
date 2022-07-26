const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
  makeHTML() {
    return `
    <div class="card" style="width: 18rem;">
        <img src="./images/thisisengineering-raeng-64YrPKiguAE-unsplash.jpg"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6>Software Engineer</h6>
            <p class="card-text">Employee ID: ${this.id}</p>
            <p class="card-text">Employee Email: ${this.email}</p>
            <p class="card-text">My github is ${this.github}</p>
        </div>
    </div>`;
  }
}
module.exports = Engineer;
