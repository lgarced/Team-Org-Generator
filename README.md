# 10 Object-Oriented Programming: Team Profile Generator

[![License: MIT](https://img.shields.io/github/license/CailinBellWold/Team-Profile-Generator?style=plastic)](https://opensource.org/licenses/MIT)

## Description 
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so the scope of this project includes writing a unit test for every part of the code and ensuring that it passes each test.

### Motivation
Streamlining each step of the programming process enables the developer to spend more time problem-solving and less time duplicating efforts. Automating the process of creating README.md files is one step in streamlining project development.

## Table of Contents
- [Core Objectives Met](#Core)
- [Technologies Used](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#MIT)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Core Objectives Met

1. Following user responses to prompts for team members and their information, an HTML file is generated that displays a nicely formatted team roster based on user input. 
2. When a user clicks on an email address in the HTML, their default email program opens and populates the TO field of the email with the address.
3. When a user clicks on the GitHub username, that GitHub profile opens in a new tab.
4. When a user starts the application, they are prompted to enter the team manager’s name, employee ID, email address, and office number.
5. When a user enters the team manager's name, employee ID, email address, and office number, they are presented with a menu with the option to add an engineer or an intern or to finish building their team.
6. When a user selects the engineer option, then they are prompted to enter the engineer’s name, ID, email, and GitHub username, and are taken back to the menu. 
7. When a user selects the intern option, then they are prompted to enter the intern’s name, ID, email, and school, and are taken back to the menu.
8. When a user is finished building their team, then they exit the application and the HTML is generated.

## Technologies Used
- JavaScript
- Node.js
- Shields.io
- Jestjs.io
- [NPM Inquirer Package](https://www.npmjs.com/package/inquirer)
- [NPM FS Package](https://www.npmjs.com/package/fs)
- [NPM Colors Package](https://www.npmjs.com/package/colors)

## Installation

1. Clone this Team-Profile-Generator repo to your machine.
2. Open the repo in your terminal.
3. Run ```npm init```
4. Run ```npm install```

## Usage

1. Open Team-Profile-Generator (now stored on your machine) in your terminal.
2. Run ``` node index.js ```
2. You will be prompted to answer questions about your team. Answer each question.
3. Your My-Team.html file will write to the output folder. 