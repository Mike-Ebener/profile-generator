const { expect, test } = require('@jest/globals');
const { string } = require('yargs');
const Intern = require('../lib/Intern');
// const Employee = require('../lib/Employee');


test('creates a new Intern profile', () => {
    const intern = new Intern('Kamala');
  
    // expect(manager.role).toEqual(['Manager']);
    expect(intern.name).toBe('Kamala');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
   
  });