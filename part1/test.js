// 13
/* console.log('3' + 2);
console.log('3' - 2);
console.log(3 + null);
console.log('3' + null);
console.log(true + 3);
console.log(false + null);
console.log('3' + undefined);
console.log('3' - undefined); */


// 14
/* console.log('2' > 1);
console.log('2' < '12');
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 2); */
/* console.log(true === Boolean(2));
console.log(true);
console.log(Boolean(2)); */

// 19
function printNums()
{
    console.log(1);
    setTimeout(function() {console.log(2);}, 1000);
    setTimeout(function() {console.log(3);}, 0);
    console.log(4);
}

printNums();