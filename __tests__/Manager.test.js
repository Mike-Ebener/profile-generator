const { expect, test } = require('@jest/globals');
const { string } = require('yargs');
const Manager = require('../lib/Manager');



test('creates a new Manager profile', () => {
    const manager = new Manager('Kamala');
  
    // expect(manager.role).toEqual(['Manager']);
    expect(manager.name).toBe('Kamala');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
   
  });

  test('gets managers data as an object', () => {
    const manager = new Manager('Kamala');
    expect(manager.getStats()).toHaveProperty('name');
    expect(manager.getStats()).toHaveProperty('id');
    expect(manager.getStats()).toHaveProperty('email');
    expect(manager.getStats()).toHaveProperty('role');
    expect(manager.getStats()).toHaveProperty('office');
  });