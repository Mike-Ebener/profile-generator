const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

const promptUser = portfolioData =>
{
    
return inquirer.prompt([
      
      {
        type: 'input',
        name: 'name',
        message: 'Enter your name',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter your ID'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide your email:'
      },
      {
        type: 'checkbox',
        name: 'role',
        message: 'Which role best describes your position?',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'office',
        message: 'What office number do you work from?',
        when: ({ role }) => role=['Manager']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github user name?',
        when: ({ role }) => 'Engineer'
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school do you go to?',
        when: ({ role }) => 'Intern'
      }
    ])
    .then(portfolioData => {
        console.log(portfolioData);
        return portfolioData;
        //projectData.push(portfolioData);
        // const employeeOne = new Employee(portfolioData.name, portfolioData.id,portfolioData.email);
        // console.log(employeeOne.getStats());

      });
};
    promptUser()
      .then(portfolioData => {
       console.log(portfolioData);
       
        // const pageMD = generateMarkdown(profileData);
        // fs.writeFile('./dist/README.md', pageMD, err => {
        //   if (err) throw new Error(err);
        //  console.log('Page created! Check out README.md in the dist directory to see it!');
        // });

        
    });
    