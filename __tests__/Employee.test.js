const { expect, test } = require('@jest/globals');
const { string } = require('yargs');
const Employee = require('../lib/Employee');



test('creates a new employee profile', () => {
    const employee = new Employee('Kamala');
    
    expect(employee.name).toBe('Kamala');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
   
  });

  test('gets employees data as an object', () => {
    const employee = new Employee('Kamala');
    expect(employee.getStats()).toHaveProperty('name');
    expect(employee.getStats()).toHaveProperty('id');
    expect(employee.getStats()).toHaveProperty('email');
    expect(employee.getStats()).toHaveProperty('role');
  });

//   test('gets employees data as an object', () => {
//     const employee = new Employee('Kamala');
//     expect(employee.getStats).toBe('Kamala');
//     expect(employee.getStats).toEqual(expect.any(String));
//     expect(employee.getStats).toEqual(expect.any(String));
//     expect(employee.getStats).toBe('Employee');
//   });
