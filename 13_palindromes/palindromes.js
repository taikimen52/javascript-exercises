const palindromes = function (text) {
    const processed = text.toLowerCase().replace(/[^a-z0-9]/g, "")
    const reversed = processed.split("").reverse().join("");
    return processed === reversed;

};

palindromes('racecar')
palindromes('racecar!')
palindromes('A car, a man, a maraca.')
palindromes('Animal loots foliated detail of stool lamina.')
palindromes('ZZZZ car, a man, a maracaz.')
palindromes('rac3e3car')
palindromes('r3ace3car')

// Do not edit below this line
module.exports = palindromes;
