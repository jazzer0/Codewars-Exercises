export function decodeMorse(morseCode: string): string {
  let MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
  };
  const words = morseCode.split(/\s\s\s/);
  let decodedMorseCode: string[] = [];
  words.forEach((words) => {
    let decodeWord = words.split(/\s/).map((letter) => {
      return MORSE_CODE[letter];
    });
    decodedMorseCode.push(decodeWord.join(""));
  });

  return decodedMorseCode.join(" ").trim();
}
console.log(decodeMorse("   .... . -.--   .--- ..- -.. .   "))
