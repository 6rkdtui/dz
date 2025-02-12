const word = 'password'; 
console.log(word);

function coder(sourceWord){
    let arr = [];
    arr = sourceWord.split('').reverse();

    // меняем первый и второй символы местами
    const twoSymbol = arr.splice(1,1).join('');
    arr.unshift(twoSymbol);

    // меняем последний символ и предпоследний
    const penultimateSymbol = arr.splice(arr.length -2, 1).join('');
    arr.push(penultimateSymbol);

    return arr.join('');
}
const codeWord = coder(word);
console.log(codeWord);

function decode(code){

    // делаем из строки массив
    let arr = [];
    arr = code.split('');

    // меняем последний символ и предпоследний
    const penultimateSymbol = arr.splice(arr.length -2, 1).join('');
    arr.push(penultimateSymbol);

    // меняем первый и второй символы местами
    const twoSymbol = arr.splice(1,1).join('');
    arr.unshift(twoSymbol);
    
    if (word === arr.reverse().join('')){
        return true;
    } else{
        return false;
    }
    
}

const a= decode('rdowsspa');
console.log(a);