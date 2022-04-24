const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateTeam = (employeeData) => {
    const { employees } = employeeData;
    return `
    ${employees
        .filter(({ employee }) => {
            if(employee === 'Engineer') {
                return true
            } else {
                return false
            }
        })
        .map(({ name, email, id, github}) => {
            const engineer = new Engineer(name, email, id, github)
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 class="portfolio-item-title text-light">${engineer.name}</h3>
                <h5 class="portfolio-languages">
                    Role: ${engineer.getRole()}
                </h5>
                <p>
                    Employee Id: ${engineer.id} <br/>
                    Email: <a href="mailto:${engineer.email}">${engineer.email}</a><br/>
                    GitHub: <a href=https://github.com/${engineer.github} class="btn"><i class="fab fa-github mr-2"></i>${engineer.github}</a>
                </p>
            </div>
            `
        })
        .join('')
    }
    ${employees
        .filter(({ employee }) => {
            if(employee === 'Intern') {
                return true
            } else {
                return false
            }
        })
        .map(({ name, email, id, school}) => {
            const intern = new Intern(name, email, id, school)
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 class="portfolio-item-title text-light">${intern.name}</h3>
                <h5 class="portfolio-languages">
                    Role: ${intern.getRole()}
                </h5>
                <p>
                    Employee Id: ${intern.id} <br/>
                    Email: <a href="mailto:${intern.email}">${intern.email}</a><br/>
                    School: ${intern.school} <br/>
                </p>
            </div>
            `
        })
        .join('')
    }
    `
}

const generateTeamSection = (data) => {
    const { name, id, email, officeNumber, ...employeeData} = data;
    const manager = new Manager(name, id, email, officeNumber);

    return `
    <section class="my-3" id="portfolio">
        <div class="flex-row justify-space-between">
            <div class="col-12 mb-2 bg-dark text-light p-3">
                <h3 class="portfolio-item-title text-light">${manager.name}</h3>
                <h5 class="portfolio-languages">
                    Role: ${manager.getRole()}
                </h5>
                <p>
                Employee Id: ${manager.id} <br/>
                Email: <a href="mailto:${manager.email}>${manager.email}</a><br/>
                Office Number: ${manager.officeNumber} <br/>
                </p>
            </div>
            ${generateTeam(employeeData)}
        </div>
    </section>
    `
}

const generatePage = (data) => {
    const { name } = data;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${name}'s Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">${name}'s Team</h1>
            </div>
        </header>

        <main class="container my-5">
            ${generateTeamSection(data)}
        </main>
    </body>
    `
}

module.exports = generatePage;