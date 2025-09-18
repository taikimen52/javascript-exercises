const fibonacci = function(num) {
    let int = parseInt(num)
    let arr = [1, 1];
    if(int === 0){
        return 0;
    }else if(int < 0){
        return "OOPS"
    }

    for(let i = 1; i < int; i++){
        arr.push(arr[i-1]+arr[i]);
    }
    return arr[int-1];
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci("0");
fibonacci("1");
fibonacci("2");
fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
