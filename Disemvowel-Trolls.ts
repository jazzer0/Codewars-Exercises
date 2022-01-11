export class Kata {
  static disemvowel(str: string): string {
    const vowels = ["a", "e", "i", "o", "u"];

    const strInArr = str.split("").map((letter) => {
      if (vowels.includes(letter.toLowerCase())) {
        return "";
      }
      return letter;
    });

    return strInArr.join("");
  }
}
