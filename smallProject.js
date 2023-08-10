// to put underscore into a string 

const str = 'Suman Kumar Mukherjee';
const spl = str.split('');
// console.log('spl-->', spl);
const str1 = [4,5,59];
str1.unshift(str);
// console.log('str1-->',str1);

// diff bet arrow and normal function
let arr = [23,43,56,76,87];
// console.log(this);
function myFunction (params) {
    // console.log("The params is"+ this);
    return;
}
myFunction();


// arrow function
let obj1 = {
    a : this,
     myFunction1 : function (params) {
        console.log(this);
    }
}
obj1.myFunction1();
console.log(obj1.a);
