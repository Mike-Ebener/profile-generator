const inquirer = require('inquirer');
const Employee = require('./lib/Employee')

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
    //   {
    //     type: 'input',
    //     name: 'about',
    //     message: 'Provide some information about yourself:',
    //     when: ({ confirmAbout }) => confirmAbout
    //   }
    ])
    .then(portfolioData => {
        console.log(portfolioData);
        return portfolioData;
        //projectData.push(portfolioData);
        const employeeOne = new Employee(portfolioData.name, portfolioData.id,portfolioData.email);
        console.log(employeeOne.getStats());

      });
};
    promptUser()
      .then(profileData => {
       console.log(portfolioData);
       
        const pageMD = generateMarkdown(profileData);
        fs.writeFile('./dist/README.md', pageMD, err => {
          if (err) throw new Error(err);
         console.log('Page created! Check out README.md in the dist directory to see it!');
        });

        
    });
    