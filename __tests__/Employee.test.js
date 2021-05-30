const { expect, test } = require('@jest/globals');
const { string } = require('yargs');
const Employee = require('../lib/Employee');





test('creates a new employee profile', () => {
    const employee = new Employee('Kamala');
    
    expect(employee.name).toBe('Kamala');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
   
  });



//   test('gets employees data as an object', () => {
//     const employee = new Employee('Kamala');
  
//     expect(employee.getName).toBe('Kamala');
//     expect(employee.getId).toEqual(expect.any(Number));
//     expect(employee.getEmail).toEqual(expect.stringContaining('@'));
//expect(employee.role).toBe('Employee');
//   });
