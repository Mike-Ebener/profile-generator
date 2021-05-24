const { string } = require('yargs');
const Employee = require('../lib/Employee');





test('creates a new employee profile', () => {
    const employee = new Employee('Kamala');
  
    expect(employee.name).toBe('Kamala');
    expect(employee.id).toEqual(expect.stringContaining(''));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    //expect(employee.role).toEqual(expect.arrayContaining([expect.any(Object)]));
  });

//   test('gets employees data as an object', () => {
//     const employee = new Employee('Kamala');
  
//     expect(employee.getName).toBe('Kamala');
//     expect(employee.getId).toEqual(expect.any(Number));
//     expect(employee.getEmail).toEqual(expect.stringContaining('@'));
//   });
