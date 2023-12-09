const sumAll = function(start, end) {
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
