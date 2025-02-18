const capitalize = require('./capitalize');

test('capitalize word to WORD', () => {
  expect(capitalize("word")).toBe("WORD");
});