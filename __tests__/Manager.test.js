const { expect, test } = require('@jest/globals');
const { string } = require('yargs');
const Manager = require('../lib/Manager');
// const Employee = require('../lib/Employee');


test('creates a new Manager profile', () => {
    const manager = new Manager('Kamala');
  
    // expect(manager.role).toEqual(['Manager']);
    expect(manager.name).toBe('Kamala');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
   
  });