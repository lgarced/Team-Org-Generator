//10 Challenge
const fs = require("fs");
const { prompt } = require("inquirer");
const Engineer = require("./lib/Engineer");

const employeeArr = [];

const start = () => {
  prompt({
    type:"list",
    name: "choices",
    message: "What would you like to do today?",
    choices: ['Create an Employee' , 'Generate HTML document'] 
  }).then(res => {
    switch(res.choices){
    case 'Create an Employee':
      return createEmployee();
    case 'Generate HTML document':
      return generateHTML();
    default:
  }
  })
}

const additionalQuestions = {
  Engineer: {
    type: "input",
    name: "githubInput",
    message: "What is this engineer's github?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("A github username is required for this position");
        return false;
      }
    },
  },
  Manager: {
    type: "input",
    name: "extraOffice",
    message: "What is this manager's office number?",
    validate: (extraOffice) => {
      if (extraOffice) {
        return true;
      } else {
        console.log("An office number is require for this position");
        return false;
      }
    },
  },
  Intern: {
    type: "input",
    name: "schoolInput",
    message: "What is this intern's schoool?",
    validate: (schoolInpu) => {
      if (schoolInpu) {
        return true;
      } else {
        console.log("A school name is require for this position");
        return false;
      }
    },
  },
};

const createEmployee= () => {
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
    const extraQuestions = additionalQuestions[emp.type];

    prompt(extraQuestions).then(({ extra }) => {
      console.log("extra value --- ", extra);

      const newEmp = new Engineer(emp.name, emp.id, emp.email, extra);
      employees.push(newEmp);

      console.log(`${emp.type} Created!`);
      setTimeout(start, 1500);
    });
  });
};

const generateHTML = () => {
  const html = `
    <!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
<body>
    <div class="p-4">
        <h1 class="text-center mb-5">EMPLOYEE DIRECTORY</h1>
        <div class="container-fluid" style="display:flex; justify-content: space-evenly">
            ${employees.map((emp) => emp.makeHTML()).join("\n")}
        </div>
    </div>
</body>
</html>
    `;
  fs.writeFileSync("./output.html", html);

  console.log("COMPLETE!");
  //create an html string then write to fiel using fs
};

start();



// arr.map((currentItem, i) => {
//   employeeArr[i] = new Employee(currentItem.name, currentItem.email);
// });


// inquirer
//   .prompt(questions)
//   .then(function (response) {
//     let answers = generateMarkdown(response);
//     console.log(answers);
//     writeDocument(response.document, answers);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// function writeDocument(filename, answer) {
//   fs.writeFileSync(path.join(`${filename}.html`), answer);
// }