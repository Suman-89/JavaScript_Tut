var p = 45;
console.log('p-->', typeof p, p);
var x = p.toString();
console.log('show-->', typeof x, x);
var q = '4';
console.log('q-->', q);
var y = parseInt(q);
console.log('y-->', typeof parseInt(q), parseInt(q));
console.log('yy-->', typeof y, y);

var t = '';
console.log('show t -->', t);
let arr1 = [1,2,3,3,5,6,7,8];
generic(arr1);
console.log('arr1-->',typeof arr1, arr1);
console.log('index of array-->', arr1.indexOf(2));
// to convert array to object
let arr2obj = Object.assign(arr1);
console.log('arr1obj', arr2obj);
console.log('print5-->', typeof arr1[4], arr1[4]);
let arr2 = ['1','2'];
console.log('arr2-->', typeof arr2, arr2[1]);

let obj1 = {'name':'suman','place':'kolkata'};
console.log('obj1-->', typeof obj1, obj1);
console.log('obj2arraybykey-->', Object.keys(obj1));
console.log('obj2arraybyvalue->', Object.values(obj1));
console.log('obj2arraybyentries->', Object.entries(obj1));


var p = 4;
console.log('p2-->', typeof p, p);
// var r = prompt("Enter Your Name :", "Suman");
// document.write(r);

function generic(getData){

    console.log('getData-->', getData);
    let x = getData;
    console.log('x-->', x);

}
// generic(21);
let arr3 = [1,2,3,4,6];
let arr4 = ['kolkata','pune'];
let arr5 = [7,7,8,'chennai','delhi'];
const concat1 = arr4.concat(arr3).concat(arr5);
console.log('concat1-->', concat1);
const concat2 = arr4.concat(arr3,arr5);
console.log('concat2-->', concat2);

// spread operator
const concat3 = [...arr3, ...arr4];
console.log('concat3-->', concat3);

// ...arr3 ----> rest operator
//... --> spread operator

//push array.push
const arr7 = [1,4,6,'ny'];
console.log('arr7-->',arr7);
let arrPush = arr7.push(true);
console.log('arrPush-->',arrPush);
console.log('arr7-->',arr7);

//pop 
let arrPop = arr7.pop();
console.log('arPop-->',arrPop);
var arrLength = arr7.length;
console.log('arr7-->',arrLength);

// math operation 
var f = 27;
var t = Math.round(f);
console.log('math ops-->', Math.round(f), 'ceil -->',  Math.ceil(f), 'floor-->',  Math.floor(f), 'cbrt-->', Math.cbrt(f));

let stringName = 'Uttam Kumar';
let upprCase = stringName.toUpperCase(); // string to uppercase function
console.log('uppercase-->', upprCase);
let lowerCase = stringName.toLowerCase(); // string to Lowercase function
console.log('lowerCase-->', lowerCase);


// shift & unshift 
const arry1 = [1,4,6,'ny','co'];
let unShift = arry1.unshift('uk');
console.log('unshift-->', unShift, 'Uarr7-->', arry1);
let shift = arry1.shift();
console.log('shift-->',shift,'shiftarry1-->',arry1);

// splice

const arry2 = [1,4,6,7,5,3];
let splice = arry2.splice(1,4);
console.log('splice-->', splice,'aarry2-->', arry2);

const arry3 = ['a','b','c','d'];
let spliceModify = arry3.splice(2,0,'e','f'); // position, index, element/elements , 0 means modification.
console.log('spliceModify-->', spliceModify, 'arry3-->',arry3);


// slice function

const arry4 = [1,3,5,6,7];
let slice = arry4.slice(2,3);
console.log('slice-->', slice);

//includes function returns boolean value

const includes = arry4.includes(3,5);
console.log('includes-->', includes);

// blank array

const arry5=[];
arry5.push(1,2,3);
console.log('arry5-->',arry5);

//array of object

let arrObj1 = [{'name':'suman','place':'kolkata'}];
const arrayObjPush = arry5.push(arrObj1);
console.log('arrayObjPush',arry5);

// find function for testing purpose

const arr9 = [1,3,4,5,6];

const newData = 20;
newGeneric(newData);

function newGeneric(argForGen) {
  console.log('argForGen->', argForGen);
  const sum = argForGen + 4;
  console.log('sum->', sum);
  gen2(sum);
}

function gen2(newAr5) {
  console.log('newAr5->', newAr5);
}

const findArr1 = [1, 2, 3];

const findOps1 = findArr1.find((e) => e % 2 == 0);
console.log('findOps1-->', findOps1);

const findOps2 = findArr1.find((e) => e < 1);
console.log('findOps2-->', findOps2);

const arrObj = [
    {
      userId: 1,
      id: 1,
      title: 'sunt',
    },
    {
      userId: 1,
      id: 2,
      title: 'quit',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
    },
    {
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
    },
  ];

  const findOps3 = arrObj.find((data) => data.id == 5);
  console.log('findOps3->', findOps3);
  
  arrObj.map((mapData, index) => console.log('mapData-->', mapData.title ,'count--->', index+1));
  const arrObjcopy = arrObj.map((mapData, index) => mapData.title);
  console.log('arrObjcopy-->',arrObjcopy);

  // math 

let circles = [10, 30, 50];

const circleArea = (radius) => {
  return Math.floor(Math.PI * radius * radius);
};
let areas = circles.map(circleArea);
console.log('areas=>', areas);




console.log('math', Math);
const newArea = circles.map((rad) => Math.floor(Math.PI*rad*rad));
console.log('newArea-->', newArea);

// filter

arrObj.filter((data) => console.log('fdataid', data.id>2));
let fdata = arrObj.filter((data) => data.id > 2);
console.log('fdata-->',fdata);

let circles1 = [
  20, 40, 60
];
console.log('crl-->',circles1.length); // 3

let numbers = [10, , 20, 30];
console.log('no.-->',numbers.length); // 4
numbers[12]=200;
console.log('no2-->', numbers); // 13 

/// Reduce

let reduceOps = circles.reduce((prev, curr) => prev + curr);

console.log('reduceOps->', reduceOps);

let reduceRightOps = circles.reduceRight((prev, curr) => prev * curr);
console.log('reduceRightOps->', reduceRightOps);

// 

let reduceOpsT1 = circles.reduce( (prev, curr) => {
  return (prev + curr);
}, 0);
console.log('reduceOpsT1->', reduceOpsT1);
let reduceOpsT2 = circles.reduce(function (prev, curr) {
  return prev + curr;
});

console.log('reduceOpsT2->', reduceOpsT2);
// every
var array5 = [2,1];
let everyResult = array5.every((f) => f >= 0);
console.log('everyResult-->', everyResult);


// some 

let someRes = array5.some((s) => s > 6);
console.log('someRes-->', someRes);

//sort

let alpArr1 = [1, 4, 2, 3];

let sortedIncArr = alpArr1.sort((p, s) => {
  return p - s;
});

console.log('sortedIncArr->', sortedIncArr);

let sortedDecArr = alpArr1.sort((p, s) => {
  return s - p;
});

console.log('sortedDecArr->', sortedDecArr);

let alpArr2 = [10,100,1,40,3,400,30];

let alpOrder2 = alpArr2.sort();
console.log('alpOrder2-->', alpOrder2);
 // for each

 let ranks = ['A', 'B', 'C'];
 console.log('ranks-->',ranks);
for (let i = 0; i < ranks.length; i++) {
    console.log('ranks-->',ranks[i]);
}

let ranks1 = ['A', 'B', 'C'];

ranks1.forEach(function name(params) { 
  console.log('params-->',params);
})


// forEach

ranks1.forEach((parameter) => console.log(parameter));

//flat

const details = [
  [1,2,3,4,[98,'j',5,'h',[98,'j',5,'h',[98,'j',5,'h']]]],
];
let flatData = details.flat();
console.log('flatData-->', flatData);
//count 2 
let flatData1 = details.flat(2);
console.log('flatData1-->', flatData1);
//infinity
let flatData2 = details.flat(Infinity);
console.log('flatData2-->', flatData2);

//join

let ranks2 = ['A', 'B', 'C'];
let r = ranks2.join('');
console.log('r-->', typeof r, r);


let name3 = ['farhan','khan'];
let hyp = name3.join('-').toUpperCase();
console.log('hyp-->',hyp);

let hyp1 = name3.join('_').toUpperCase();
console.log('hyp1Type-->', typeof hyp1,'hyp1-->', hyp1);

///string method

// includes
let email = 'admin@example.com';
console.log('includesString-->',email.includes('e'));
function sub(a,b){
  return a-b;
}

// trim 
let str = '  JS trim  ';
let result = str.trim('').split('');
console.log(result);

///padStart
const str1 = '1234'.padStart(8,'0');
console.log({str1}); // "00001234"

const str2 = '1234'.padStart(6,'p');
console.log({str2}); // "00001234"

const str3 = 'date'.padEnd(10,'new');
console.log({str3});

let bs = '';
let fullData = bs.concat('cycle');
console.log('fullData-->',fullData);

// replace
const str4 = 'Suman Kumar Mukherjee';
const rData = str4.replace('Suman','Ram');
console.log('rData-->',rData);

const str5 = 'Suman Suman Suman Suman Kumar Mukherjee';
const rData1 = str5.replaceAll('Suman','Ram');
console.log('rData1-->',rData1);

let sdata = 'dipak kundu dipak kundu dipak kundu'.replaceAll('dipak','amal');
console.log('sdata-->', sdata);

// object to array
let obj3 = {'city' : 'delhi'};
console.log('objToArr-->', Object.entries(obj3));

// array to Object
let arr11 = [1,2,3,4];
let arry = Object.assign(arr11);
console.log('arry->', typeof arry, arry);

let Arrname = [1,2,3,4,5];
let srrt = Arrname.sort((p,s) => s-p);
console.log('srrt-->', srrt);
let srrt2 = Arrname.sort((p,s) => p-s);
console.log(srrt2);


//substraction//

let diff = sub(20,10);
console.log('diff-->',diff);

//multiplication//
function suman(p,q){
  return p*q;
}
let mul = suman(20,3);
console.log('mul-->',mul);

//map 222
let abc = [3, 4 , 6];
let Mabc = abc.map((value)=>{
  console.log('value-->',value);
  return value+2 ;
})
console.log('Mabc-->', Mabc);

//filter 3332
let fil = [23,45,56,7,8,6];
let fDataArr = fil.filter((f)=>{
  console.log('f-->', f);
  return 10<f ;
})
console.log('fDataArr-->',fDataArr);

// reduce //
let arr12 = [1,3,4,5,6,7];
const reduce_func = (a1, a2)=> a1+a2;
let narr12 = arr12.reduce(reduce_func);
console.log('narr12-->',narr12);

//non primitive data tyoes objects
const det = {
  'suman':34,
  'dipak':35,
  'anjan':76
}
console.log(det['anjan']);

// for loop
// for(let p=0; p<6; p++){
//   console.log(p);
// }
// sum of numbers using for loop
let Natsum = 0;
let n = prompt('Enter the number');
n = Number.parseInt(n);
for (let i=0; i<n; i++){
  Natsum += (i+1);
}
console.log('The sum of first'+n+'natural numbers is'+Natsum);