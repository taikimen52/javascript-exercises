function numberChecker(number) {
  if (number === 1000) {
    return true;
  } else if(number === 10){
    return true;
  } else {
    return false;
  }
}

numberChecker(1000);
numberChecker(10);
numberChecker(9);
numberChecker(6);


// Do not edit below this line
module.exports = numberChecker;
