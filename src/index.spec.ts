// arrange - given
// act - when
// assert - then
import { IInputProps, Stats } from './index';

describe('Stats Calculator', () => {
  test('create an array of numbers', () => {
    const values: IInputProps['values'] = [2, 4, 21, -8, 53, 40];
    const stats = new Stats(values);
    expect(stats.values).toEqual(values);
  });

  test('throw error when the inputProps is invalid such as "NaN"', () => {
    const values: IInputProps['values'] = [2, 4, 21, NaN, 40];
    const statsOutput = () => {
      new Stats(values);
    };
    expect(statsOutput).toThrowError();
  });
});

describe('Stats calculator functions', () => {
  let stats: Stats;

  beforeAll(() => {
    const values: IInputProps['values'] = [1, 2, 21, -12, 24];
    stats = new Stats(values);
  });

  test('get the minimum value in the stats calculator', () => {
    expect(stats.minimumValue()).toEqual(-12);
  });

  test('get the maximum value in the stats calculator', () => {
    expect(stats.maximumValue()).toEqual(24);
  });

  test('get the no. of values in the stats calculator', () => {
    expect(stats.valueCount()).toEqual(5);
  });

  test('get the average of all the values in the stats calculator', () => {
    expect(stats.getAverage()).toEqual(7.2);
  });
});
