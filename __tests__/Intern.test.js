const { expect, test } = require('@jest/globals');
const { string } = require('yargs');
const Intern = require('../lib/Intern');


test('creates a new Intern profile', () => {
    const intern = new Intern('Kamala');
  
    // expect(intern.role).toEqual(['intern']);
    expect(intern.name).toBe('Kamala');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
   
  });

  test('gets interns data as an object', () => {
    const intern = new Intern('Kamala');
    expect(intern.getStats()).toHaveProperty('name');
    expect(intern.getStats()).toHaveProperty('id');
    expect(intern.getStats()).toHaveProperty('email');
    expect(intern.getStats()).toHaveProperty('role');
    expect(intern.getStats()).toHaveProperty('school');
  });