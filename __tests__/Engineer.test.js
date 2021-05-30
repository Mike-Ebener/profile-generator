const { expect, test } = require('@jest/globals');
const { string } = require('yargs');
const Engineer = require('../lib/Engineer');



test('creates a new Engineer profile', () => {
    const engineer = new Engineer('Kamala');
  
    // expect(manager.role).toEqual(['Manager']);
    expect(engineer.name).toBe('Kamala');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
   
  });