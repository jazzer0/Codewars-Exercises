const generateRandomIntBetween3And5 = () => {
    const randInt = Math.floor(Math.random() * 10)

    if (randInt % 2 !== 0) return 5

    return 3
}

const main = () => {
    const letters = ['a','b','c','d','e','f','g','j','h','i ','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let palavras = []
    let cont = 0

    for (let j = 0; j <= 10000; j++) {
        let palavra = ""
        for (let i = 0; i <= generateRandomIntBetween3And5(); i++) {
            palavra = palavra + letters[Math.floor(Math.random() * letters.length)]
        }
        palavras.push(palavra.replace(/\s/, ''))
        let reversePal = palavra.split('').reverse().join('')
        if ((reversePal === palavra) === true){
            cont++
        }
    }
    console.log(cont)
}

main()