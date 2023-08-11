const a = [3,5.4,4,6] ; 
console.log(a.length);

console.log("" > -1)

function sayHi() {
    var name = 'suman';
    var age = 34;
    console.log(name);
    console.log(age);
}
sayHi();

let arr1 = [1,'f',{c:'2'}];
console.log(arr1.length)
console.log(arr1[2])
arr1.pop()
console.log(arr1)
arr1.unshift('dem')
console.log(arr1)
arr1.push('half')
console.log(arr1)
arr1.shift()
console.log(arr1)
arr1.pop()
console.log(arr1)

console.log(arr1.indexOf('f'))
console.log(Array.isArray(arr1))

let int = 3 ;
if(int % 2 === 1){
    console.log('it is odd number')
}
function say(message) {
    console.log(message, typeof message);
}
say(123456n)

function add(a,b) {
    return a*b ;
}

let product = add(3,4);
console.log('product :', product)

function view(message) {
    return message;
}

let show = view('hi suman');
console.log('show :', show);

function sy(params) {
    console.log(params)
}
sy('hiiiii1')
sy('hiiiii2')
sy('hiiiii3')
sy('hiiiii4')

function show1() {
     console.log(arguments)
    // let sum = 0;
    // for(let i=0; i< arguments.length; i++){
    //     sum+= arguments[i]
    // }
    // return sum;
}
// console.log(show1(0,1,2,3,3))
show1(1,2,3,4,5)


//first-class
function add(a, b) {
    return a + b;
}

let sum = add;
// console.log(sum)
function average(a,b,fn) {
    return fn(a,b)/2
}

let res = average(11,20,sum)
console.log(res)

//anonymous function
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

//callback
function filter(number) {
    let result = [];
    for (const values of number){
        if(values%2 !=0){
            result.push(values);
        }
    }
    return result;
}
let number = [2,3,4,5,6,7,8,9]

// console.log(filter(number))

//from site
// function filter(numbers) {
//     let results = [];
//     for (const number of numbers) {
//       if (number % 2 != 0) {
//         results.push(number);
//       }
//     }
//     return results;
//   }
//   let numbers = [1, 2, 4, 7, 3, 5, 6];
//   console.log(filter(numbers));

// higher order function (callback function)
let numbers = [1, 2, 4, 7, 3, 5, 6];
function isOdd(n){
    return n % 2 !=0 ;
}
function isEven(m){
    return m % 2 == 0 ;
}

function filter1(numbers,fn) {
    let result = [];
    for (const i of numbers){
        if(fn(i)){
            result.push(i)
        }
    }
    return result
}
console.log('even number array :',filter1(numbers,isEven));
console.log('odd number array :',filter1(numbers,isOdd));

//callback as an anonymous function
function filter(numArray, callback){
    let newArray = [];
    for (const i of numArray){
        if(callback(i)){
            newArray.push(i);
        }
    }
    return newArray;
}

let numArray = [1,2,3,44,66,55,77,99,996,456,332];

let oddNumArray = filter(numArray, function (n){
    return n % 2 !=0 ;
})
console.log('oddNumArray :',oddNumArray)


// even nummber array generation using anonymous function
function filterEvenNum(numArr1,callback) {
    let newEvnArr = [] ;
    for(const p of numArr1){
        if(callback(p)){
            newEvnArr.push(p);
        }
    }
    return newEvnArr;
}

let numArr1 = [33,55,77,88,99,22,42,56];

const enArray = filterEvenNum(numArr1,function (int) {
    return int % 2 == 0 ;    
});

console.log('enArray :',enArray);



// anonymous funnction using arow function method
const getNewArr =((arrInfo,callback)=>{
    let newOddArr = [];
    for(const  int of arrInfo){
        if(callback(int)){
            newOddArr.push(int)
        }
    }
    return newOddArr;
});

let arrInfo = [4,5,6,7,8,9,22,11,33,34,56,76,77,89];

const oddArray = getNewArr(arrInfo, (f)=>{
    return f % 2 !=0 ;
})

console.log('oddNumArr_using_arrowFunc :',oddArray)

let arr2 = [5,6,9,10];

const maxArr = Math.max(...arr2);
console.log('maxarr:',maxArr);





















