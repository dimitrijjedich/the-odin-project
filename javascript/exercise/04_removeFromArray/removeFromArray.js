const removeFromArray = function(array, element) {
  let result = [];
  for(let i=0; i<array.length; i++) {
    if (array[i] != element) {
      result.push(array[i]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
