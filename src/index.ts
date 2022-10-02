export interface IInputProps {
  values: number[];
}

export class Stats {
  values: number[];

  private constructor(inputProps: IInputProps) {
    this.values = inputProps.values;
  }

  public minimumValue() {
    return Math.min(...this.values);
  }

  public maximumValue() {
    return Math.max(...this.values);
  }

  public valueCount() {
    return this.values.length;
  }

  public getAverage() {
    let sum = 0;
    const { values } = this;

    for (const elem of values) {
      sum += elem;
    }

    return sum / values.length;
  }

  public static create(inputProps: IInputProps) {
    const { values } = inputProps;

    if (values.includes(NaN)) {
      throw new Error(`Invalid input NaN`);
    }

    const stats = new Stats(inputProps);
    return stats;
  }
}
