const sumAll = function(start, end) {
  if ( typeof(start) != "number" || typeof(end) != "number" ) {
    return "ERROR";
  }
  if ( start < 0 || end < 0 ) {
    return "ERROR";
  }
  if ( start > end ) {
    start = start + end;
    end = start - end;
    start = start - end;
  }
  let result = 0;
  for(let i=start; i<=end; i++) {
    result = result + i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
