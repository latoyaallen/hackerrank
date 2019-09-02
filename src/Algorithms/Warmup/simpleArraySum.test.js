import simpleArraySum from './simpleArraySum'

it('gives the sum of the intergers in an array', () => {
  expect(simpleArraySum([ 1, 2, 3, 4, 10, 11 ])).toEqual(31);
});
