let arr = [10, [25, 13], [14, [55]], 2];

console.log("First solution");
var depth = 1;
var max = 1;
function recursiveDepth(arr) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      depth++;
      // console.log("if:");
      // console.log(`depth:${depth}`);
      // console.log(element);
      recursiveDepth(element);
    }
    if (depth > max) {
      max = depth;
    }
    if (arr.indexOf(element) === arr.length - 1) {
      depth = 1;
      // console.log(`max:${max}`);
      // console.log(`depth:${depth}`);
      // console.log(element);
    }
  }
  return max;
}

console.log(`depth : ${recursiveDepth(arr)}`);

////////////////////////second solution//////////////////////////
console.log("Second solution");
function maxDepth(str) {
  let current_depth = 0;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "[") {
      current_depth++;
      if (current_depth > max) {
        max = current_depth;
      }
    } else if (str[i] == "]") {
      if (current_depth > 0) {
        current_depth--;
      } else {
        return -1;
      }
    }
  }
  return max;
}



let str = JSON.stringify(arr);

console.log(`depth : ${maxDepth(str)}`);
