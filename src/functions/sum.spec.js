const { sum } = require('./sum');

describe('Sum', () => {
  test('Return 4 when pass an array with two values', () => {
    const mockValues = [
      { a: 2, b: 2 }
    ]
    expect(sum(mockValues)).toBe(4);
  });
});