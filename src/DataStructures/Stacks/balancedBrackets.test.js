import balancedBrackets from './balancedBrackets';

it('gives YES when given a balanced string', () => {
  const s = "{[()]}"
  expect(balancedBrackets(s)).toEqual("YES");
});
