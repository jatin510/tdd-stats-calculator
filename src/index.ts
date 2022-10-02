export interface IInputProps {
  values: number[];
}

export class Stats {
  values: number[];

  constructor(values: IInputProps['values']) {
    if (values.includes(NaN)) {
      throw new Error(`Invalid input NaN`);
    }
    this.values = values;
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
}
