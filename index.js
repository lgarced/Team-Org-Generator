//10 Challenge
const fs = require("fs");
const inquirer = require("inquirer");

const employeeArr = [];


const questions = () => {
  prompt([
    {
      message: "What type of employee would you like to create?",
      type: "list",
      name: "type",
      choices: ["Engineer", "Manager", "Intern"],
    },
    {
      type: "input",
      name: "nameInput",
      message: "What is the employee's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name");
          return false;
        }
      },
    },
    {
      message: "What is the employee's id?",
      type: "input",
      name: "idInput",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("You must enter an ID to continue");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "emailInput",
      message: "What is employee's email?",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("You must enter an email to continue");
          return false;
        }
      },
    },
  ]).then((emp) => {
    const extraQ = additionalQuestions[emp.type];

    prompt(extraQ).then(({ extra }) => {
      console.log("extra value --- ", extra);

      const newEmp = new Engineer(emp.name, emp.id, emp.email, extra);
      employees.push(newEmp);

      console.log(`${emp.type} Created!`);
      setTimeout(start, 1500);
    });
  });
};

// arr.map((currentItem, i) => {
//   employeeArr[i] = new Employee(currentItem.name, currentItem.email);
// });


inquirer
  .prompt(questions)
  .then(function (response) {
    let answers = generateMarkdown(response);
    console.log(answers);
    writeDocument(response.document, answers);
  })
  .catch(function (err) {
    console.log(err);
  });

function writeDocument(filename, answer) {
  fs.writeFileSync(path.join(`${filename}.html`), answer);
}


console.log(employeeArr);