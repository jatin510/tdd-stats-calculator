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

  test('throw error when the inputProps is invalid such as "NaN"', () => {
    const inputProps = { values: [2, 4, 21, NaN, 40] };
    const statsOutput = () => {
      Stats.create(inputProps);
    };
    expect(statsOutput).toThrowError();
  });

  // test('get the minimum value in the stats calculator', () => {
  //   const inputProps = { values: [1, 2, 21, -12, 24] };
  //   const stats = Stats.create(inputProps);
  //   expect(stats.minimumValue()).toEqual(-12);
  // });
});

describe('Stats calculator functions', () => {
  test('get the minimum value in the stats calculator', () => {
    const inputProps = { values: [1, 2, 21, -12, 24] };
    const stats = Stats.create(inputProps);
    expect(stats.minimumValue()).toEqual(-12);
  });

  test('get the maximum value in the stats calculator', () => {
    const inputProps = { values: [1, 2, 21, -12, 24] };
    const stats = Stats.create(inputProps);
    expect(stats.maximumValue()).toEqual(24);
  });

  test('get the no. of values in the stats calculator', () => {
    const inputProps = { values: [1, 2, 21, -12, 24] };
    const stats = Stats.create(inputProps);
    expect(stats.valueCount()).toEqual(5);
  });
});
