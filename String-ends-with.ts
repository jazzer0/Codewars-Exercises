export default function isSquare(n: number): boolean {
    const compare = (Math.floor(Math.sqrt(n))*Math.floor(Math.sqrt(n)))
    return (compare === n)
  };

  console.log(isSquare(361))

  export function comp(a1: number[] | null, a2: number[] | null): boolean {
    //Checar 
    if (a1.length !== a2.lenght || a1 === null || a2 === null)
      return false;

    
    return true;
  }