/*String.prototype.toJadenCase = function (){
};*/

const convertCase = (str: string) => {
    const formattedStr = str.split(' ').map(word =>{
        let upperCase = word.charAt(0).toUpperCase()
        return upperCase + word.slice(1)
    })
    return formattedStr.join(" ")
}
console.log(convertCase("jazza ricardo firmino"));