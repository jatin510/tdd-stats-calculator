// arrange - given
// act - when
// assert - then
import { Stats } from './index';

describe('Stats Calculator', () => {
  test('create an array of numbers', () => {
    const inputProps = { values: [2, 4, 21, -8, 53, 40] };
    const stats = Stats.create(inputProps);
    expect(stats.values).toEqual(inputProps.values);
  });
});
