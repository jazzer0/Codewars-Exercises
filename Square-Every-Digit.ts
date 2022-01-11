export class Kata {
  static squareDigits(num: number): number {
    return Number(
      num
        .toString()
        .split("")
        .map((number) => parseInt(number) ** 2)
        .join("")
    );
  }
}
