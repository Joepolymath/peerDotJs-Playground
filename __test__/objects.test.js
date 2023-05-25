const isEqual = require('../chapter 2/objects');

describe('the isEqual Function', () => {
  const obj1 = {
    name: 'foo',
  };

  const obj2 = {
    name: 'foo',
  };

  it('should return true', () => {
    expect(isEqual(obj1, obj2)).toEqual(true);
  });

  it('should return false', () => {
    const obj3 = {
      name: 'foo',
      age: 4,
    };
    expect(isEqual(obj1, obj3)).toEqual(false);
  });
});
