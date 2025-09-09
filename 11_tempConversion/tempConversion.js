const convertToCelsius = function(temp) {
  const convertTemp = (temp - 32)*5/9
  return parseFloat(convertTemp.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  const convertTemp = (temp * 9 / 5) + 32;
  return parseFloat(convertTemp.toFixed(1))
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
