myArr = [10, [25, 13], [14, [55]], 2];

var depth = 1;
var max = 1;
//could use any of the functions from Q3 that return the depth of the array
function recursiveDepth(arr) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      depth++;
      //   console.log("if:");
      //   console.log(`depth:${depth}`);
      //   console.log(element);
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

function flatter(arr) {
  let rep = recursiveDepth(arr);
  //   console.log(rep);
  for (let i = 0; i <= rep; i++) {
    arr = [].concat(...arr);
  }

  console.log(arr);
}

flatter(myArr);

// //////////////////////////////////////second solution///////////////////////////////////////
let myStr = myArr.toString();
myStr = myStr.split(",").map(function (item) {
  return parseInt(item, 10);
});
console.log(myStr);
