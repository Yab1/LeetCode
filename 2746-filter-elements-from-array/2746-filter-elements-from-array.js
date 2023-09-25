/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = []
    for(let i = 0;i<arr.length;i++){
      let truth = fn(arr[i],i)
      if(truth){
        filteredArr.push(arr[i])
      }
    }
    return filteredArr
};