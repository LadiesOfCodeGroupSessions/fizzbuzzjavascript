// use named imports

const ES6Class = require("../src/ES6Class");

beforeAll(() => {
  // ES6Class.prototype.someMethod = jest.fn();
  ES6Class.prototype.otherMethod = jest.fn();
  ES6Class.prototype.otherMethod.mockReturnValue('yay');
  // ES6Class.prototype.someMethod.mockReturnValue('something')
});
afterAll(() => {
  // ES6Class.prototype.someMethod.mockReset();
  ES6Class.prototype.otherMethod.mockReset();
});

test('Jest should be able to spy someMethod', () => {
  const es6Class = new ES6Class();
  es6Class.someMethod();
  // expect(es6Class.someMethod.mock.calls.length).toBe(1);
  expect(es6Class.someMethod()).toBe('something');
});
test('Jest should be able to stub an otherMethod', () => {
  const es6Class = new ES6Class();
  // expect(es6Class.otherMethod.mock.calls.length).toBe(1);
  expect(es6Class.otherMethod()).toBe('yay');
});

test('Jest should be able to spy otherMethod', () => {
  const es6Class = new ES6Class();
  expect(es6Class.otherMethod.mock.calls.length).toBe(1);
});