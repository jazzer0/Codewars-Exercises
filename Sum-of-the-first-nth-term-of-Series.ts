export function SeriesSum(n:number):string{
    let contador = 0
    let soma = 0
    let divisor = 1
    while(contador < n){
        contador++
        soma = soma + 1/divisor
        divisor = divisor + 3
    }
    return soma.toFixed(2)
}
console.log(SeriesSum(5))