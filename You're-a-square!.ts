export default function isSquare(n: number): boolean {
  const compare = Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n));
  return compare === n;
}
