export function solution(str: string, ending: string): boolean {
  return str.includes(ending, str.length - ending.length); // TODO: complete
}
