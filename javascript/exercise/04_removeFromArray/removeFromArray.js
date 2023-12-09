const removeFromArray = function(array, element1, element2=null, element3=null, element4=null) {
  let result = [];
  for(let i=0; i<array.length; i++) {
    if (!(array[i] === element1) && !(array[i] === element2) && !(array[i] === element3) && !(array[i] === element4)) {
      result.push(array[i]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
