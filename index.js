const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
 
// question array for initial prompt on team manager
const promptManager = () => {
return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name.",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!")
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team manager's Employee ID.",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's Employee ID!")
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team manager's Email.",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's Email!")
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the team manager's office number.",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!")
                    return false;
                }
            } 
        }
    ])
};

const promptForTeam = (teamData) => {
    if(!teamData.employees) {
        teamData.employees = [];
    }
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Please select an option for your team:',
                choices: ['Engineer', 'Intern', 'Finish building my team']
            },
            {
                type: 'input',
                name: 'name',
                message: "Please enter this employee's name: ",
                when: ({ employee }) => {
                    if(employee !== 'Finish building my team') {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: (nameInput) => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's name!")
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter this employee's id: ",
                when: ({ employee }) => {
                    if(employee !== 'Finish building my team') {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: (nameInput) => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's id!")
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter this employee's Email: ",
                when: ({ employee }) => {
                    if(employee !== 'Finish building my team') {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: (nameInput) => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's Email!")
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter this engineer's Github username: ",
                when: ({ employee }) => {
                    if(employee === 'Engineer') {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: (nameInput) => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's Github username!")
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter this intern's school name: ",
                when: ({ employee }) => {
                    if(employee === 'Intern') {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: (nameInput) => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school name!")
                        return false;
                    }
                } 
            }
        ])
        .then(employeeData => {
            if(employeeData.employee !== 'Finish building my team') {
                teamData.employees.push(employeeData);
                return promptForTeam(teamData);
            } else {
                return teamData;
            }
        })
}

promptManager()
.then(promptForTeam)
.then((data) => {
    // console.log(data);
    return generatePage(data);
})
.then(pageData => {
    return pageData;
})
.then(htmlData => {
    return writeFile(htmlData);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err);
})
