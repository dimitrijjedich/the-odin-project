const convertToCelsius = function(temp) {
  return round((temp-32)*5/9);
};

const convertToFahrenheit = function(temp) {
  return round((temp*9/5)+32);
};

function round(number) {
  let result = number *10;
  result = Math.round(result);
  return result / 10;
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
