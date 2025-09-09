const sumAll = function(a, b) {
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"
    }else{
        const result =  (a+b)/2*(Math.max(a, b) + 1 - Math.min(a,b));
        return result;   
    }
};

sumAll(2, 4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(2.5, 4)
sumAll(10, "90")
sumAll(10, [90, 1])

// Do not edit below this line
module.exports = sumAll;
