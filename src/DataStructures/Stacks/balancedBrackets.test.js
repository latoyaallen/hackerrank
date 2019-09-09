import balancedBrackets from './balancedBrackets';

it('gives YES when given a balanced string', () => {
  const s = "{[()]}"
  expect(balancedBrackets(s)).toEqual("YES");
});

it('gives NO when given a non balanced string', () => {
  const s = "{[(])}"
  expect(balancedBrackets(s)).toEqual("NO");
});

it('gives YES when given a non balanced string', () => {
  const s = "{{[[(())]]}}"
  expect(balancedBrackets(s)).toEqual("YES");
});
