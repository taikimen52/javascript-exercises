const reverseString = function(string) {
    const length = string.length
    let reverseStr = ""
    for(let i = 1; i <= length; i++){
        reverseStr += string.charAt(length-i)
    }
    return reverseStr;
};

reverseString("hello");
reverseString("hello there");
reverseString('123! abc! Hello, Odinite.');
reverseString(" ");
// Do not edit below this line
module.exports = reverseString;
