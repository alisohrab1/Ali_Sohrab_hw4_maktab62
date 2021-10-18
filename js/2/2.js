
console.log('first soloution : for a single word');
let str = "dad";


function isSame1(str)
{
    let reverse = str.toLowerCase().split("").reverse().join("");
    return result = (str === reverse) ? true : false;
}

console.log(isSame1(str));

/////////////////////////////////////////////////////////////second solution////////////////////////////////////////////////////////
console.log('second soloution: for multiple words');
let myStr = "race car"
function isSame2(str){

    let reverse = str.toLowerCase().split(" ").join("").split("").reverse().join("");
    return result = (str.toLowerCase().split(" ").join("") === reverse) ? true : false;
}
console.log(isSame2(myStr));





