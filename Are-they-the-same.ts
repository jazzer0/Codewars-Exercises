export function comp(a1: number[] | null, a2: number[] | null): boolean {
  //Checar se tem o mesmo tamanho ou se algum dos array é nulo
  if (a1.length !== a2.length || a1 === null || a2 === null) return true;

  return false;
}
