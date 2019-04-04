global.window = global;
require('../src/data');
require('./data.spec.js');
// const input=LOL.data;
// const onput=


describe('filterData', () => {
  
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });

  it('debería retornar "example"', () => {
    expect(example()).toBe('');
  });
})
