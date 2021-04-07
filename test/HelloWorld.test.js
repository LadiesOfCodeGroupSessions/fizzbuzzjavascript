const HelloWorld = require('../src/HelloWorld');

test('Hello World should return "Hello World!"', () => {
  expect(HelloWorld()).toBe('Hello World!');
});
