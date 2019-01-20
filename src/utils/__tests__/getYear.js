import { getYear } from '../getYear';

const testDateFormat = [
  {
    plain: '2019-01-20',
    formatted: '2019',
  },
  {
    plain: '2011-12-13',
    formatted: '2011',
  },
];

describe('getYear should return the valid format', () => {
  testDateFormat.forEach(element => {
    it(`${element.plain} should return ${element.formatted}`, () => {
      expect(getYear(element.plain)).toBe(element.formatted);
    });
  });
});
