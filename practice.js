let br1 = ['uk','us','uoi'];
console.log(br1);
console.log(br1.length);

let g = br1.push('dc');
console.log(g);
// console.log(g.length);
console.log('br1 after push-->',br1)

/// sort prototype
// number array
const number = [1,2,8,44,6,94,6,3,1]
number.sort();
console.log('number',number);


//string array
const city = ['delhi','pune','chennai','ahmedabad','kolkata'];
city.sort();
console.log('city-->',city);


//increment sort
const number1 = [1,2,8,44,6,94,6,3,1];
const incrSort = number1.sort((p,s) => {
    return p-s;
});
console.log('incrSort-->', incrSort);


//decrement sort
const number2 = [1,2,8,44,6,94,6,3,1];
const decrSort = number2.sort((p,s) => {
    return s-p;
});
console.log('decrSort-->', decrSort);

// reverse
const city1 = ['delhi','pune','chennai','ahmedabad','kolkata'];
const citySort = city1.reverse();
console.log('citySort-->', citySort);


// unShif
const kolkata = ['rajpur','hedua','kalighat','sovabajzar'];
console.log('Kolkata-->', kolkata);

// after using unshift 
const newKolkata = kolkata.unshift('sealdah');
console.log('newKolkata-->', kolkata);

//using shift 
const newKolkata1 = kolkata.shift();
console.log('newKolkata1--->', kolkata);

const str = 'Suman Kumar Mukherjee';
const spl = str.split('');
console.log('spl-->', spl);
const str1 = [];
str1.unshift(str);
console.log(str1);

// replace & replaceAll

let sdata = 'dipak kundu dipak kundu dipak kundu'.replaceAll('dipak','amal');
console.log('sdata-->', sdata);

// concat string method
let newStr = 'New';
let concatStr = newStr.concat('_','York');
console.log('concatStr-->', typeof concatStr, concatStr);


// concatenation of array of strings
let colors = ['Blue',' ','Green',' ','Teal'];
console.log(colors)
let result = ''.concat(...colors);
console.log(result,typeof result);

// number into a string by concat
let nos1 = '';
let nos2 = nos1.concat(1,2,3,4,5,6);
console.log('nos2-->', nos2, 'length-->', nos2.length);


// slice method 
console.log('examination'.length);
let str2 = 'examination'.slice(2,6);
console.log('str2-->', str2, 'length-->', str2.length);
let str3 = 'examination'.slice(-7);
console.log('str3-->', str3);
let index = 'examination'.slice(2,'examination'.indexOf('t'));
console.log('index-->', index, 'length-->', index.length);

//substring
let str11 = 'JavaScript Substring';
let substring = str11.substring(5,15);
console.log(substring);

let substring1 = str11.substring(15);
console.log(substring1);

const mail = 'suman.mukherjee@gmail.com';
const domain = mail.substring(mail.indexOf('@')+1);
console.log('domain-->', domain);

let r = 'ddd.ewrr@rmail.org';
let p = r.substring(r.indexOf('@')+1);
console.log(p);

// split string method (two parameters : separator , limit)
let strng = 'Suman Kumar Mukherjee';
let splt = strng.split(' ');
console.log('splt-->', splt);
let splt1 = strng.split(' ',2);
console.log('splt1-->', splt1);
let splt2 = strng.split(/[' ']/);
console.log('splt2-->', splt2);


const dialog1 = 'Hello ! How are You ? You look pretty !!';
const dialog2 = dialog1.split(/([?,!!, ,])/); // using capturing parentheses
console.log('dialog2-->', dialog2);

// pad string method
let strng1 = 'Application';
let padstrng = strng1.padStart(20,'5');
console.log('padstrng-->', padstrng, 'length-->', padstrng.length);

let padstrng1 = strng1.padEnd(20,'5');
console.log('padstrng1-->',padstrng1, 'length-->', padstrng1.length);

let spl1 = padstrng.split('');
console.log(spl1);

let spl2 = strng1.padEnd(14,'55555');
console.log(spl2);

//trim string method
let trm = '  suman  ';
let trm1 = trm.trim();
console.log(trm1, trm1.length);
let trm2 = trm.trimStart();
console.log(trm2, trm2.length);

//searching string method
let incl = 'Suman Kumar Mukherjee';
console.log(incl.includes('Kumar')); 

let idx = 'Examination'.lastIndexOf('n');
console.log(idx);

let idx1 = 'Examination'.lastIndexOf('n',7);
console.log(idx1);

let idx2 = 'Examination'.lastIndexOf('T');
console.log(idx2);

let idx3 = 'Examination'.toLocaleUpperCase().lastIndexOf('T');
console.log(idx3);

//search string method
let srch = 'I am invincible !';

let idx4 = srch.search(/[0-9]/);
console.log(idx4);

let idx5 = srch.search(/[a-z]/);
console.log(idx5);

// splice array method
let me = ['suman','kumar','mukherjee'];
me.splice(1,0,'dev');
console.log(me);

//array like object into array
function tr() {
    return Array.prototype.slice.call(arguments);
}
let ntr = tr('suman','dev','kumar','mukherjee');
console.log(ntr);

//map
let mdata = [25,35,45];
let mresult = mdata.map(Math.sqrt);
console.log(mresult);

const myPromise = new Promise((resolve,reject)=>{
    let connection = false;
    if(connection){
        resolve('connection established')
    } else {
        reject('connection error !')
    }
});
myPromise.then((resonse)=>{
    console.log('resonse:',resonse)
}).catch((error)=>{
    console.log('error:',error)
})


// push
let colors1 = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

colors1.push(...cmyk)

// for (const color1 of cmyk) {
//   colors1.push(color1);
// }

console.log(colors1);

//unshift & shift
const building = ['capitol of usa','ricina of india','burj_khalifa of dubai']

const addBuilding = building.unshift('parliament house of new delhi')

console.log('addBuilding->',addBuilding,'building--->',building)
console.log({building})
console.log({addBuilding})

//splice()
const product = ['honey','jelly','butter']

const delProduct = product.splice(1,1)

console.log('delProduct-->',delProduct)

//slice()
const myName = 'SUMAN'

const slicedName = myName.slice(-4,3)
console.log('slicedName-->',slicedName)

