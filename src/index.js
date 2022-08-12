
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (Array.isArray(matrix) && (matrix.length>0)) {
    matrix.forEach((value, index) => {
      if (index % 2 === 0) {
        res.push(value);        
      }
      else {
        res.push(value.sort((item1, item2) => item1 > item2 ? -1 : 1))
      }
    });      
    
    return res.flat();
  }
  else {
    return [];
  }
}
