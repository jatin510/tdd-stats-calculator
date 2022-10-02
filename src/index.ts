interface IInputProps {
  values: number[];
}

export class Stats {
  values: number[];
  private constructor(inputProps: IInputProps) {
    this.values = inputProps.values;
  }
  public static create(inputProps: IInputProps) {
    const stats = new Stats(inputProps);
    return stats;
  }
}
