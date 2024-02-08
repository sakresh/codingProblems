function longestCapitaizedSubstring(str){
    let string = str.match(/[A-Z][a-z]+|[0-9]+/g).join(" ").split(' ');
    let result = string.reduce(
        (accumulator, currentValue) => (currentValue.length > accumulator.length ? currentValue : accumulator),
        '',
    );
    return result;
}

const str = 'skillRACK';
console.log(longestCapitaizedSubstring(str));
